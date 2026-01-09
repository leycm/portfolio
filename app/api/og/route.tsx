import { ImageResponse } from "next/og";

export const runtime = 'edge';

export async function GET() {
  const interSemiBold = await fetch(
    new URL('../../../fonts/Inter-SemiBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());
  
  const interSemiBold2 = interSemiBold; // Using the same font for both weights

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '4rem',
          color: '#E6EDF3',
          fontFamily: 'Inter',
        }}
      >
        <div style={{ display: 'flex', marginBottom: '2rem' }}>
          <div style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            backgroundColor: '#21262D',
            marginRight: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px',
            color: '#58A6FF',
            fontWeight: 'bold'
          }}>
            L
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              margin: '0 0 0.5rem 0',
              lineHeight: 1.1
            }}>
              Hi, I'm Lennard
            </h1>
            <p style={{
              fontSize: '24px',
              color: '#8B949E',
              margin: '0 0 1rem 0',
              fontFamily: 'Inter',
            }}>
              aka leycm
            </p>
          </div>
        </div>
        
        <div style={{
          fontSize: '32px',
          lineHeight: 1.5,
          marginBottom: '2rem',
          maxWidth: '800px'
        }}>
          German Student with a passion for computer science, specializing in Java and Backend development with 4 Years of Experience.
        </div>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: 'auto',
          paddingTop: '2rem',
          borderTop: '1px solid #30363D'
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#21262D',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            fontSize: '24px',
            color: '#C9D1D9'
          }}>
            🚀 Java & Backend Developer
          </span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#21262D',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            fontSize: '24px',
            color: '#C9D1D9'
          }}>
            🎓 Currently graduating
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interSemiBold,
          weight: 600,  // SemiBold weight
          style: 'normal',
        },
        {
          name: 'Inter',
          data: interSemiBold2,
          weight: 600,  // Using the same weight for both since we only have one font file
          style: 'normal',
        },
      ],
    }
  );
}
