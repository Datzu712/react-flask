import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [react(), tsconfigPaths()],
        resolve: {
            alias: {
                '@images': '/src/scss/default/images',
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true,
                    silenceDeprecations: ['mixed-decls', 'slash-div'],
                },
            },
        },
        base: env.VITE_BASE_URL || '/',
    };
});
