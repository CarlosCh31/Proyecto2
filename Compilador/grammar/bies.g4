grammar bies;

// Regla de inicio para reconocer funciones y expresiones
program
    : (functionDeclaration | variableDeclaration | assignment | printStmt | functionCall)* EOF
    ;

// Declaración de variables
variableDeclaration
    : ('let' | 'const' | 'var') ID '=' expr
    ;

// Asignación de variables
assignment
    : ID '=' expr
    ;

// Declaración de funciones
functionDeclaration
    : 'let' ID '=' '(' paramList? ')' '=>' expr
    ;

// Llamado de funciones
functionCall
    : ID '(' (expr (',' expr)*)? ')'
    ;

// Declaración de `print`
printStmt
    : 'print' '(' expr ')'
    ;

// Lista de parámetros
paramList
    : ID (',' ID)*
    ;

// Expresiones aritméticas y paréntesis
expr
    : expr op=('*' | '/') expr          # MulDivExpr
    | expr op=('+' | '-') expr          # AddSubExpr
    | '(' expr ')'                      # ParenExpr
    | '-' expr                          # NegateExpr
    | functionCall                      # FunctionCallExpr
    | printStmt                         # PrintStmtExpr
    | ID                                # IdentifierExpr
    | NUMBER                            # NumberExpr
    | STRING                            # StringExpr
    ;

// Definición de tokens
ID      : [a-zA-Z_][a-zA-Z_0-9]* ;
NUMBER  : [0-9]+ ;
STRING : '"' (~["\r\n])* '"';
WS      : [ \t\r\n]+ -> skip ;
COMMENT : '//' ~[\r\n]* -> skip ;
MULTILINE_COMMENT : '/*' .*? '*/' -> skip ;
