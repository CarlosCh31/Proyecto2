grammar bies;

// Regla de inicio para reconocer funciones y expresiones
program
    : (functionDeclaration | printStmt | expr)* EOF
    ;

// Declaración de funciones
functionDeclaration
    : 'let' ID '=' '(' paramList? ')' '=>' expr
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
    : ID '(' (expr (',' expr)*)? ')'    # FunctionCallExpr
    | expr op=('*' | '/') expr          # MulDivExpr
    | expr op=('+' | '-') expr          # AddSubExpr
    | '(' expr ')'                      # ParenExpr
    | '-' expr                          # NegateExpr
    | ID                                # IdentifierExpr
    | NUMBER                            # NumberExpr
    | STRING                            # StringExpr
    ;

// Definición de tokens
ID      : [a-zA-Z_][a-zA-Z_0-9]* ;
NUMBER  : [0-9]+ ;
STRING  : '"' .*? '"';
WS      : [ \t\r\n]+ -> skip ;
