import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
                    borderRadius: '4px',
                }}
            >
                <span
                    style={{
                        color: '#fe5f55',
                        fontSize: 20,
                        fontWeight: 900,
                        fontFamily: 'Arial Black, Arial, sans-serif',
                        lineHeight: 1,
                        letterSpacing: '-1px',
                    }}
                >
                    N
                </span>
            </div>
        ),
        size,
    );
}
