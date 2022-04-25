import { createContentlayerPlugin } from 'next-contentlayer';

const withContentlayer = createContentlayerPlugin({});

export default withContentlayer({
    reactStrictMode: true,
});
