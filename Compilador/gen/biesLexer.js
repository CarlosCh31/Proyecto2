// Generated from grammar/bies.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,20,115,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,
1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,
11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,5,16,
90,8,16,10,16,12,16,93,9,16,1,17,4,17,96,8,17,11,17,12,17,97,1,18,1,18,5,
18,102,8,18,10,18,12,18,105,9,18,1,18,1,18,1,19,4,19,110,8,19,11,19,12,19,
111,1,19,1,19,1,103,0,20,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,
11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,1,0,4,3,0,65,90,
95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,
118,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,
0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,1,41,1,0,0,0,3,45,1,0,0,0,5,47,1,
0,0,0,7,49,1,0,0,0,9,51,1,0,0,0,11,54,1,0,0,0,13,56,1,0,0,0,15,62,1,0,0,
0,17,64,1,0,0,0,19,66,1,0,0,0,21,69,1,0,0,0,23,75,1,0,0,0,25,79,1,0,0,0,
27,81,1,0,0,0,29,83,1,0,0,0,31,85,1,0,0,0,33,87,1,0,0,0,35,95,1,0,0,0,37,
99,1,0,0,0,39,109,1,0,0,0,41,42,5,108,0,0,42,43,5,101,0,0,43,44,5,116,0,
0,44,2,1,0,0,0,45,46,5,61,0,0,46,4,1,0,0,0,47,48,5,40,0,0,48,6,1,0,0,0,49,
50,5,41,0,0,50,8,1,0,0,0,51,52,5,61,0,0,52,53,5,62,0,0,53,10,1,0,0,0,54,
55,5,44,0,0,55,12,1,0,0,0,56,57,5,112,0,0,57,58,5,114,0,0,58,59,5,105,0,
0,59,60,5,110,0,0,60,61,5,116,0,0,61,14,1,0,0,0,62,63,5,123,0,0,63,16,1,
0,0,0,64,65,5,125,0,0,65,18,1,0,0,0,66,67,5,105,0,0,67,68,5,110,0,0,68,20,
1,0,0,0,69,70,5,99,0,0,70,71,5,111,0,0,71,72,5,110,0,0,72,73,5,115,0,0,73,
74,5,116,0,0,74,22,1,0,0,0,75,76,5,118,0,0,76,77,5,97,0,0,77,78,5,114,0,
0,78,24,1,0,0,0,79,80,5,42,0,0,80,26,1,0,0,0,81,82,5,47,0,0,82,28,1,0,0,
0,83,84,5,43,0,0,84,30,1,0,0,0,85,86,5,45,0,0,86,32,1,0,0,0,87,91,7,0,0,
0,88,90,7,1,0,0,89,88,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,
92,34,1,0,0,0,93,91,1,0,0,0,94,96,7,2,0,0,95,94,1,0,0,0,96,97,1,0,0,0,97,
95,1,0,0,0,97,98,1,0,0,0,98,36,1,0,0,0,99,103,5,34,0,0,100,102,9,0,0,0,101,
100,1,0,0,0,102,105,1,0,0,0,103,104,1,0,0,0,103,101,1,0,0,0,104,106,1,0,
0,0,105,103,1,0,0,0,106,107,5,34,0,0,107,38,1,0,0,0,108,110,7,3,0,0,109,
108,1,0,0,0,110,111,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,113,1,0,
0,0,113,114,6,19,0,0,114,40,1,0,0,0,5,0,91,97,103,111,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class biesLexer extends antlr4.Lexer {

    static grammarFileName = "bies.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'let'", "'='", "'('", "')'", "'=>'", "','", 
                         "'print'", "'{'", "'}'", "'in'", "'const'", "'var'", 
                         "'*'", "'/'", "'+'", "'-'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, "ID", "NUMBER", "STRING", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "T__15", "ID", "NUMBER", "STRING", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

biesLexer.EOF = antlr4.Token.EOF;
biesLexer.T__0 = 1;
biesLexer.T__1 = 2;
biesLexer.T__2 = 3;
biesLexer.T__3 = 4;
biesLexer.T__4 = 5;
biesLexer.T__5 = 6;
biesLexer.T__6 = 7;
biesLexer.T__7 = 8;
biesLexer.T__8 = 9;
biesLexer.T__9 = 10;
biesLexer.T__10 = 11;
biesLexer.T__11 = 12;
biesLexer.T__12 = 13;
biesLexer.T__13 = 14;
biesLexer.T__14 = 15;
biesLexer.T__15 = 16;
biesLexer.ID = 17;
biesLexer.NUMBER = 18;
biesLexer.STRING = 19;
biesLexer.WS = 20;



