import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#111111',
                    borderRadius: '20px',
                }}
            >
                <span
                    style={{
                        color: '#fe5f55',
                        fontSize: 120,
                        fontWeight: 900,
                        fontFamily: 'Arial Black, Arial, sans-serif',
                        lineHeight: 1,
                        letterSpacing: '-4px',
                    }}
                >
                    N
                </span>
            </div>
        ),
        size,
    );
}
