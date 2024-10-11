import localFont from 'next/font/local'

export const helveticaNowDisplay = localFont({
    src: [
        {
            path: './fonts/helvetica-now-display/HelveticaNowDisplay-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/helvetica-now-display/HelveticaNowDisplay-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/helvetica-now-display/HelveticaNowDisplay-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/helvetica-now-display/HelveticaNowDisplay-ExtraBold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './fonts/helvetica-now-display/HelveticaNowDisplay-Black.otf',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-display',
})

export const helveticaNowText = localFont({
    src: [
        {
            path: './fonts/helvetica-now-text/HelveticaNowText-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/helvetica-now-text/HelveticaNowText-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/helvetica-now-text/HelveticaNowText-Bold.otf',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-text',
})
