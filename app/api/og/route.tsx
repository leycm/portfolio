import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id") ?? "default";

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 800,
    height: 500,
    deviceScaleFactor: 1,
  });

  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';

  await page.goto(`${baseUrl}`, {
    waitUntil: ["domcontentloaded", "networkidle0"],
    timeout: 30000
  });

  try {
    await page.waitForSelector('#og-container', { 
      visible: true,
      timeout: 10000
    });
    
    await page.evaluateHandle('document.fonts.ready');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const containerContent = await page.$eval('#og-container', el => el.textContent || '');
    if (!containerContent.trim()) {
      throw new Error('OG container is empty');
    }
    
    await page.evaluate(() => {
      const target = document.querySelector('#og-container');
      if (!target) throw new Error('OG container not found');

      const wrapper = document.createElement('div');
      wrapper.className = 'max-w-5xl mx-4 sm:ml-4 mb-4 sm:mb-4 mt-4 sm:mt-4 py-4 px-4';
      
      wrapper.appendChild(target.cloneNode(true));
      
      document.body.innerHTML = '';
      document.body.appendChild(wrapper);

      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.body.style.width = '800px';
      document.body.style.height = '500px';
      document.body.style.overflow = 'hidden';
      document.body.style.display = 'flex';
      document.body.style.alignItems = 'center';
      document.body.style.justifyContent = 'center';

	  document.body.style.margin = '50px';
      document.body.style.padding = '0';
      
      // Style the wrapper to take full container space
      wrapper.style.width = '100%';
      wrapper.style.height = '100%';
      wrapper.style.margin = '0';
      wrapper.style.padding = '0';
    });
    
    await new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
    console.error('Error during page processing:', error);
    throw error;
  }

 /* const htmlContent = await page.content();
  
  await browser.close();

  return new NextResponse(htmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    },
  });*/

  const screenshot = await page.screenshot({
    type: "png",
  });

  await browser.close();

  return new NextResponse(screenshot as unknown as Blob, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Access-Control-Allow-Origin': '*',
    },
  });

}
