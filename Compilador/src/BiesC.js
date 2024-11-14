import antlr4 from 'antlr4';
import BiesLexer from '../gen/biesLexer.js';
import BiesParser from '../gen/biesParser.js';
import CompilerVisitor from './CompilerVisitor.js';
import fs from 'fs';
import logger from "./Logger.js";

export function compileFile(inputFile, outputFile) {
    const inputCode = fs.readFileSync(inputFile, 'utf8');
    const chars = new antlr4.InputStream(inputCode);
    const lexer = new BiesLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new BiesParser(tokens);

    parser.buildParseTrees = true;
    const tree = parser.program();

    logger.debug(tree.toStringTree(parser.ruleNames));

    const compiler = new CompilerVisitor();
    const compiledCode = compiler.visit(tree);

    fs.writeFileSync(outputFile, compiledCode);
    console.log(`Compilación exitosa. Archivo de salida: ${outputFile}`);
}
