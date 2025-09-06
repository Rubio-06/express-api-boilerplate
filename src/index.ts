import app from './app';
import { config } from "@config/env"

import chalk from 'chalk';

const PORT = config.port || 3000;

app.listen(PORT, () => {
    console.clear();
    console.log(`
        Server is running at 
        > ${chalk.green(`http://localhost:${PORT}`)}
        > ${chalk.blue(`http://localhost:${PORT}/api/health`)}
    `);
});