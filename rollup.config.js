import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/index.js', // ระบุไฟล์เริ่มต้น
  plugins: [
    commonjs(),
    resolve({
      extensions: ['.js', '.jsx'], // รองรับ .jsx
    }),
    babel({
      exclude: 'node_modules/**', // ไม่คอมไพล์ไฟล์จาก node_modules
      presets: ['@babel/preset-env', '@babel/preset-react'], // คอมไพล์ JSX
    }),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      name: 'deepmerge',
      file: 'dist/umd.js',
      format: 'umd',
    },
  ],
};
