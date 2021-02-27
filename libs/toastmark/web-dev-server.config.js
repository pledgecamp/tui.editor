import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
  appIndex: 'src/__sample__/index.html',
  open: true,
  nodeResolve: true,
  watch: true,
};