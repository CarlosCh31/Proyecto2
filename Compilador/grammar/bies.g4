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
    : ID '(' (expr (',' expr)*)? ')'    # CustomFunctionCall
    | 'int' '(' expr ')'                # IntFunctionCall
    ;

// Declaración de `print`
printStmt
    : 'print' '(' expr ')'
    ;

// Lista de parámetros
paramList
    : ID (',' ID)*
    ;

value
    : NUMBER                         # NumberValue
    | STRING                         # StringValue
    | 'true'                         # TrueValue
    | 'false'                        # FalseValue
    | 'null'                         # NullValue
    ;

// Expresiones aritméticas y paréntesis
expr
    : expr '**' expr                    # ExponentiationExpr
    | 'list' '(' (expr (',' expr)*)? ')' # MakeListExpr
    | 'bool' '(' expr ')'               # BoolExpr
    | 'len' '(' expr ')'                # LenExpr
    |'[' (value (',' value)*)? ']'      # ListExpr
    | 'int' '(' expr ')'                # IntExpr
    | 'str' '(' expr ')'                # StrExpr
    | '!' expr                          # NotExpr
    | expr '&&' expr                    # AndExpr
    | expr '||' expr                    # OrExpr
    | expr '!=' expr                    # NotEqualExpr
    | expr '>' expr                     # GreaterThanExpr
    | expr '>=' expr                    # GreaterThanOrEqualExpr
    | expr '<' expr                     # LessThanExpr
    | expr '<=' expr                    # LessThanOrEqualExpr
    | 'true'                            # TrueExpr
    | 'false'                           # FalseExpr
    | 'null'                            # NullExpr
    | 'input' '(' ')'                   # InputExpr
    | expr op=('*' | '/') expr          # MulDivExpr
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
BOOLEAN : 'true' | 'false';
NUMBER  : [0-9]+ ;
STRING : '"' (~["\r\n])* '"';
WS      : [ \t\r\n]+ -> skip ;
COMMENT : '//' ~[\r\n]* -> skip ;
MULTILINE_COMMENT : '/*' .*? '*/' -> skip ;


