import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProduction = process.env.NODE_ENV === 'production';

const config ={
    entry: {
        employees: './src/employees.jsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    optimization:{
        splitChunks:{
            name: 'vendor',
            chunks: 'all',
        },
    },
    devtool: 'source-map'
}

// export default function() {
//     if(isProduction) {
//         config.mode = 'production'
//     } else {
//         config.mode = 'development'
//     }
//     return config
// }

export default function() {
    config.mode = isProduction ? 'production' : 'development'; // Set mode based on the corrected variable
    return config;
}