import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            extraProperties: {
                'display': 'inline-block',
                'height': '20px',
                'width': '20px',
                'vertical-align': 'text-bottom',
            },
        }),
        presetRemToPx(),
    ],
    shortcuts: {
        'bg-base': 'bg-white dark:bg-[#10101a]',
        'text-base': 'text-warm-gray-500 dark:text-[#f0f0f0]',
        'font-base': 'font-medium text-lg text-base',
        'flex-center': 'flex items-center justify-center',
        'flex-y-center': 'flex items-center',
        'flex-2': 'flex-grow-2 flex-shrink-1 flex-basis-none',
        'widgets-btn': 'w40px h40px flex-center bg-[#20202a] dark:(bg-[#f0f0f0] text-black) rounded-6px text-white select-none',
    },
    theme: {
        boxShadow: {
            "box-base": '0 2px 5px 0 rgba(34,41,47,.16), 0 2px 10px 0 rgba(34,41,47,.12)',
        },
        breakpoints: {
            xs: '510px',
            md: '830px',
            lg: '1110px',
            xl: '1280px',
        },
    },
    rules: [],
});
