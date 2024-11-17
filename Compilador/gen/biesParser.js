// Generated from grammar/bies.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesListener from './biesListener.js';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,40,191,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,5,0,24,8,0,10,0,12,
0,27,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
3,3,45,8,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,5,4,56,8,4,10,4,12,4,59,9,
4,3,4,61,8,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,69,8,4,1,5,1,5,1,5,1,5,1,5,1,6,
1,6,1,6,5,6,79,8,6,10,6,12,6,82,9,6,1,7,1,7,1,7,1,7,1,7,3,7,89,8,7,1,8,1,
8,1,8,1,8,1,8,1,8,5,8,97,8,8,10,8,12,8,100,9,8,3,8,102,8,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,119,8,8,10,8,12,8,122,
9,8,3,8,124,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,154,8,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,186,8,8,10,8,12,8,189,9,
8,1,8,0,1,16,9,0,2,4,6,8,10,12,14,16,0,3,1,0,1,3,1,0,30,31,1,0,32,33,226,
0,25,1,0,0,0,2,30,1,0,0,0,4,35,1,0,0,0,6,39,1,0,0,0,8,68,1,0,0,0,10,70,1,
0,0,0,12,75,1,0,0,0,14,88,1,0,0,0,16,153,1,0,0,0,18,24,3,6,3,0,19,24,3,2,
1,0,20,24,3,4,2,0,21,24,3,10,5,0,22,24,3,8,4,0,23,18,1,0,0,0,23,19,1,0,0,
0,23,20,1,0,0,0,23,21,1,0,0,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,
25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,5,0,0,1,29,1,1,0,0,0,30,
31,7,0,0,0,31,32,5,34,0,0,32,33,5,4,0,0,33,34,3,16,8,0,34,3,1,0,0,0,35,36,
5,34,0,0,36,37,5,4,0,0,37,38,3,16,8,0,38,5,1,0,0,0,39,40,5,1,0,0,40,41,5,
34,0,0,41,42,5,4,0,0,42,44,5,5,0,0,43,45,3,12,6,0,44,43,1,0,0,0,44,45,1,
0,0,0,45,46,1,0,0,0,46,47,5,6,0,0,47,48,5,7,0,0,48,49,3,16,8,0,49,7,1,0,
0,0,50,51,5,34,0,0,51,60,5,5,0,0,52,57,3,16,8,0,53,54,5,8,0,0,54,56,3,16,
8,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,61,1,0,0,
0,59,57,1,0,0,0,60,52,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,69,5,6,0,0,
63,64,5,9,0,0,64,65,5,5,0,0,65,66,3,16,8,0,66,67,5,6,0,0,67,69,1,0,0,0,68,
50,1,0,0,0,68,63,1,0,0,0,69,9,1,0,0,0,70,71,5,10,0,0,71,72,5,5,0,0,72,73,
3,16,8,0,73,74,5,6,0,0,74,11,1,0,0,0,75,80,5,34,0,0,76,77,5,8,0,0,77,79,
5,34,0,0,78,76,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,13,1,
0,0,0,82,80,1,0,0,0,83,89,5,36,0,0,84,89,5,37,0,0,85,89,5,11,0,0,86,89,5,
12,0,0,87,89,5,13,0,0,88,83,1,0,0,0,88,84,1,0,0,0,88,85,1,0,0,0,88,86,1,
0,0,0,88,87,1,0,0,0,89,15,1,0,0,0,90,91,6,8,-1,0,91,92,5,15,0,0,92,101,5,
5,0,0,93,98,3,16,8,0,94,95,5,8,0,0,95,97,3,16,8,0,96,94,1,0,0,0,97,100,1,
0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,101,93,1,
0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,154,5,6,0,0,104,105,5,16,0,0,105,
106,5,5,0,0,106,107,3,16,8,0,107,108,5,6,0,0,108,154,1,0,0,0,109,110,5,17,
0,0,110,111,5,5,0,0,111,112,3,16,8,0,112,113,5,6,0,0,113,154,1,0,0,0,114,
123,5,18,0,0,115,120,3,14,7,0,116,117,5,8,0,0,117,119,3,14,7,0,118,116,1,
0,0,0,119,122,1,0,0,0,120,118,1,0,0,0,120,121,1,0,0,0,121,124,1,0,0,0,122,
120,1,0,0,0,123,115,1,0,0,0,123,124,1,0,0,0,124,125,1,0,0,0,125,154,5,19,
0,0,126,127,5,9,0,0,127,128,5,5,0,0,128,129,3,16,8,0,129,130,5,6,0,0,130,
154,1,0,0,0,131,132,5,20,0,0,132,133,5,5,0,0,133,134,3,16,8,0,134,135,5,
6,0,0,135,154,1,0,0,0,136,137,5,21,0,0,137,154,3,16,8,21,138,154,5,11,0,
0,139,154,5,12,0,0,140,154,5,13,0,0,141,154,5,29,0,0,142,143,5,5,0,0,143,
144,3,16,8,0,144,145,5,6,0,0,145,154,1,0,0,0,146,147,5,33,0,0,147,154,3,
16,8,6,148,154,3,8,4,0,149,154,3,10,5,0,150,154,5,34,0,0,151,154,5,36,0,
0,152,154,5,37,0,0,153,90,1,0,0,0,153,104,1,0,0,0,153,109,1,0,0,0,153,114,
1,0,0,0,153,126,1,0,0,0,153,131,1,0,0,0,153,136,1,0,0,0,153,138,1,0,0,0,
153,139,1,0,0,0,153,140,1,0,0,0,153,141,1,0,0,0,153,142,1,0,0,0,153,146,
1,0,0,0,153,148,1,0,0,0,153,149,1,0,0,0,153,150,1,0,0,0,153,151,1,0,0,0,
153,152,1,0,0,0,154,187,1,0,0,0,155,156,10,28,0,0,156,157,5,14,0,0,157,186,
3,16,8,29,158,159,10,20,0,0,159,160,5,22,0,0,160,186,3,16,8,21,161,162,10,
19,0,0,162,163,5,23,0,0,163,186,3,16,8,20,164,165,10,18,0,0,165,166,5,24,
0,0,166,186,3,16,8,19,167,168,10,17,0,0,168,169,5,25,0,0,169,186,3,16,8,
18,170,171,10,16,0,0,171,172,5,26,0,0,172,186,3,16,8,17,173,174,10,15,0,
0,174,175,5,27,0,0,175,186,3,16,8,16,176,177,10,14,0,0,177,178,5,28,0,0,
178,186,3,16,8,15,179,180,10,9,0,0,180,181,7,1,0,0,181,186,3,16,8,10,182,
183,10,8,0,0,183,184,7,2,0,0,184,186,3,16,8,9,185,155,1,0,0,0,185,158,1,
0,0,0,185,161,1,0,0,0,185,164,1,0,0,0,185,167,1,0,0,0,185,170,1,0,0,0,185,
173,1,0,0,0,185,176,1,0,0,0,185,179,1,0,0,0,185,182,1,0,0,0,186,189,1,0,
0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,17,1,0,0,0,189,187,1,0,0,0,15,23,
25,44,57,60,68,80,88,98,101,120,123,153,185,187];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesParser extends antlr4.Parser {

    static grammarFileName = "bies.g4";
    static literalNames = [ null, "'let'", "'const'", "'var'", "'='", "'('", 
                            "')'", "'=>'", "','", "'int'", "'print'", "'true'", 
                            "'false'", "'null'", "'**'", "'list'", "'bool'", 
                            "'len'", "'['", "']'", "'str'", "'!'", "'&&'", 
                            "'||'", "'!='", "'>'", "'>='", "'<'", "'<='", 
                            "'input'", "'*'", "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "ID", "BOOLEAN", "NUMBER", "STRING", 
                             "WS", "COMMENT", "MULTILINE_COMMENT" ];
    static ruleNames = [ "program", "variableDeclaration", "assignment", 
                         "functionDeclaration", "functionCall", "printStmt", 
                         "paramList", "value", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesParser.ruleNames;
        this.literalNames = biesParser.literalNames;
        this.symbolicNames = biesParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 28);
    		case 1:
    			return this.precpred(this._ctx, 20);
    		case 2:
    			return this.precpred(this._ctx, 19);
    		case 3:
    			return this.precpred(this._ctx, 18);
    		case 4:
    			return this.precpred(this._ctx, 17);
    		case 5:
    			return this.precpred(this._ctx, 16);
    		case 6:
    			return this.precpred(this._ctx, 15);
    		case 7:
    			return this.precpred(this._ctx, 14);
    		case 8:
    			return this.precpred(this._ctx, 9);
    		case 9:
    			return this.precpred(this._ctx, 8);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1550) !== 0) || _la===34) {
	            this.state = 23;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 18;
	                this.functionDeclaration();
	                break;

	            case 2:
	                this.state = 19;
	                this.variableDeclaration();
	                break;

	            case 3:
	                this.state = 20;
	                this.assignment();
	                break;

	            case 4:
	                this.state = 21;
	                this.printStmt();
	                break;

	            case 5:
	                this.state = 22;
	                this.functionCall();
	                break;

	            }
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
	        this.match(biesParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesParser.RULE_variableDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 31;
	        this.match(biesParser.ID);
	        this.state = 32;
	        this.match(biesParser.T__3);
	        this.state = 33;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(biesParser.ID);
	        this.state = 36;
	        this.match(biesParser.T__3);
	        this.state = 37;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(biesParser.T__0);
	        this.state = 40;
	        this.match(biesParser.ID);
	        this.state = 41;
	        this.match(biesParser.T__3);
	        this.state = 42;
	        this.match(biesParser.T__4);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 43;
	            this.paramList();
	        }

	        this.state = 46;
	        this.match(biesParser.T__5);
	        this.state = 47;
	        this.match(biesParser.T__6);
	        this.state = 48;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            localctx = new CustomFunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(biesParser.ID);
	            this.state = 51;
	            this.match(biesParser.T__4);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 540524064) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 27) !== 0)) {
	                this.state = 52;
	                this.expr(0);
	                this.state = 57;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 53;
	                    this.match(biesParser.T__7);
	                    this.state = 54;
	                    this.expr(0);
	                    this.state = 59;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 62;
	            this.match(biesParser.T__5);
	            break;
	        case 9:
	            localctx = new IntFunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.match(biesParser.T__8);
	            this.state = 64;
	            this.match(biesParser.T__4);
	            this.state = 65;
	            this.expr(0);
	            this.state = 66;
	            this.match(biesParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printStmt() {
	    let localctx = new PrintStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesParser.RULE_printStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(biesParser.T__9);
	        this.state = 71;
	        this.match(biesParser.T__4);
	        this.state = 72;
	        this.expr(0);
	        this.state = 73;
	        this.match(biesParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(biesParser.ID);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 76;
	            this.match(biesParser.T__7);
	            this.state = 77;
	            this.match(biesParser.ID);
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesParser.RULE_value);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 36:
	            localctx = new NumberValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.match(biesParser.NUMBER);
	            break;
	        case 37:
	            localctx = new StringValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.match(biesParser.STRING);
	            break;
	        case 11:
	            localctx = new TrueValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 85;
	            this.match(biesParser.T__10);
	            break;
	        case 12:
	            localctx = new FalseValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 86;
	            this.match(biesParser.T__11);
	            break;
	        case 13:
	            localctx = new NullValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 87;
	            this.match(biesParser.T__12);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, biesParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new MakeListExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 91;
	            this.match(biesParser.T__14);
	            this.state = 92;
	            this.match(biesParser.T__4);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 540524064) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 27) !== 0)) {
	                this.state = 93;
	                this.expr(0);
	                this.state = 98;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 94;
	                    this.match(biesParser.T__7);
	                    this.state = 95;
	                    this.expr(0);
	                    this.state = 100;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 103;
	            this.match(biesParser.T__5);
	            break;

	        case 2:
	            localctx = new BoolExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 104;
	            this.match(biesParser.T__15);
	            this.state = 105;
	            this.match(biesParser.T__4);
	            this.state = 106;
	            this.expr(0);
	            this.state = 107;
	            this.match(biesParser.T__5);
	            break;

	        case 3:
	            localctx = new LenExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 109;
	            this.match(biesParser.T__16);
	            this.state = 110;
	            this.match(biesParser.T__4);
	            this.state = 111;
	            this.expr(0);
	            this.state = 112;
	            this.match(biesParser.T__5);
	            break;

	        case 4:
	            localctx = new ListExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 114;
	            this.match(biesParser.T__17);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 11)) & ~0x1f) === 0 && ((1 << (_la - 11)) & 100663303) !== 0)) {
	                this.state = 115;
	                this.value();
	                this.state = 120;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 116;
	                    this.match(biesParser.T__7);
	                    this.state = 117;
	                    this.value();
	                    this.state = 122;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 125;
	            this.match(biesParser.T__18);
	            break;

	        case 5:
	            localctx = new IntExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 126;
	            this.match(biesParser.T__8);
	            this.state = 127;
	            this.match(biesParser.T__4);
	            this.state = 128;
	            this.expr(0);
	            this.state = 129;
	            this.match(biesParser.T__5);
	            break;

	        case 6:
	            localctx = new StrExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 131;
	            this.match(biesParser.T__19);
	            this.state = 132;
	            this.match(biesParser.T__4);
	            this.state = 133;
	            this.expr(0);
	            this.state = 134;
	            this.match(biesParser.T__5);
	            break;

	        case 7:
	            localctx = new NotExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 136;
	            this.match(biesParser.T__20);
	            this.state = 137;
	            this.expr(21);
	            break;

	        case 8:
	            localctx = new TrueExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 138;
	            this.match(biesParser.T__10);
	            break;

	        case 9:
	            localctx = new FalseExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 139;
	            this.match(biesParser.T__11);
	            break;

	        case 10:
	            localctx = new NullExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 140;
	            this.match(biesParser.T__12);
	            break;

	        case 11:
	            localctx = new InputExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 141;
	            this.match(biesParser.T__28);
	            break;

	        case 12:
	            localctx = new ParenExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 142;
	            this.match(biesParser.T__4);
	            this.state = 143;
	            this.expr(0);
	            this.state = 144;
	            this.match(biesParser.T__5);
	            break;

	        case 13:
	            localctx = new NegateExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 146;
	            this.match(biesParser.T__32);
	            this.state = 147;
	            this.expr(6);
	            break;

	        case 14:
	            localctx = new FunctionCallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 148;
	            this.functionCall();
	            break;

	        case 15:
	            localctx = new PrintStmtExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 149;
	            this.printStmt();
	            break;

	        case 16:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 150;
	            this.match(biesParser.ID);
	            break;

	        case 17:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 151;
	            this.match(biesParser.NUMBER);
	            break;

	        case 18:
	            localctx = new StringExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 152;
	            this.match(biesParser.STRING);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 187;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 185;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExponentiationExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 155;
	                    if (!( this.precpred(this._ctx, 28))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
	                    }
	                    this.state = 156;
	                    this.match(biesParser.T__13);
	                    this.state = 157;
	                    this.expr(29);
	                    break;

	                case 2:
	                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 158;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 159;
	                    this.match(biesParser.T__21);
	                    this.state = 160;
	                    this.expr(21);
	                    break;

	                case 3:
	                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 161;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 162;
	                    this.match(biesParser.T__22);
	                    this.state = 163;
	                    this.expr(20);
	                    break;

	                case 4:
	                    localctx = new NotEqualExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 164;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 165;
	                    this.match(biesParser.T__23);
	                    this.state = 166;
	                    this.expr(19);
	                    break;

	                case 5:
	                    localctx = new GreaterThanExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 167;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 168;
	                    this.match(biesParser.T__24);
	                    this.state = 169;
	                    this.expr(18);
	                    break;

	                case 6:
	                    localctx = new GreaterThanOrEqualExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 170;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 171;
	                    this.match(biesParser.T__25);
	                    this.state = 172;
	                    this.expr(17);
	                    break;

	                case 7:
	                    localctx = new LessThanExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 173;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 174;
	                    this.match(biesParser.T__26);
	                    this.state = 175;
	                    this.expr(16);
	                    break;

	                case 8:
	                    localctx = new LessThanOrEqualExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 176;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 177;
	                    this.match(biesParser.T__27);
	                    this.state = 178;
	                    this.expr(15);
	                    break;

	                case 9:
	                    localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 180;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===30 || _la===31)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 181;
	                    this.expr(10);
	                    break;

	                case 10:
	                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 183;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===32 || _la===33)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 184;
	                    this.expr(9);
	                    break;

	                } 
	            }
	            this.state = 189;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

biesParser.EOF = antlr4.Token.EOF;
biesParser.T__0 = 1;
biesParser.T__1 = 2;
biesParser.T__2 = 3;
biesParser.T__3 = 4;
biesParser.T__4 = 5;
biesParser.T__5 = 6;
biesParser.T__6 = 7;
biesParser.T__7 = 8;
biesParser.T__8 = 9;
biesParser.T__9 = 10;
biesParser.T__10 = 11;
biesParser.T__11 = 12;
biesParser.T__12 = 13;
biesParser.T__13 = 14;
biesParser.T__14 = 15;
biesParser.T__15 = 16;
biesParser.T__16 = 17;
biesParser.T__17 = 18;
biesParser.T__18 = 19;
biesParser.T__19 = 20;
biesParser.T__20 = 21;
biesParser.T__21 = 22;
biesParser.T__22 = 23;
biesParser.T__23 = 24;
biesParser.T__24 = 25;
biesParser.T__25 = 26;
biesParser.T__26 = 27;
biesParser.T__27 = 28;
biesParser.T__28 = 29;
biesParser.T__29 = 30;
biesParser.T__30 = 31;
biesParser.T__31 = 32;
biesParser.T__32 = 33;
biesParser.ID = 34;
biesParser.BOOLEAN = 35;
biesParser.NUMBER = 36;
biesParser.STRING = 37;
biesParser.WS = 38;
biesParser.COMMENT = 39;
biesParser.MULTILINE_COMMENT = 40;

biesParser.RULE_program = 0;
biesParser.RULE_variableDeclaration = 1;
biesParser.RULE_assignment = 2;
biesParser.RULE_functionDeclaration = 3;
biesParser.RULE_functionCall = 4;
biesParser.RULE_printStmt = 5;
biesParser.RULE_paramList = 6;
biesParser.RULE_value = 7;
biesParser.RULE_expr = 8;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_program;
    }

	EOF() {
	    return this.getToken(biesParser.EOF, 0);
	};

	functionDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclarationContext,i);
	    }
	};

	variableDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclarationContext,i);
	    }
	};

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	printStmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrintStmtContext);
	    } else {
	        return this.getTypedRuleContext(PrintStmtContext,i);
	    }
	};

	functionCall = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionCallContext);
	    } else {
	        return this.getTypedRuleContext(FunctionCallContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_variableDeclaration;
    }

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_assignment;
    }

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_functionDeclaration;
    }

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_functionCall;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CustomFunctionCallContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterCustomFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitCustomFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitCustomFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.CustomFunctionCallContext = CustomFunctionCallContext;

class IntFunctionCallContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterIntFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitIntFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitIntFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.IntFunctionCallContext = IntFunctionCallContext;

class PrintStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_printStmt;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterPrintStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitPrintStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitPrintStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_paramList;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesParser.ID);
	    } else {
	        return this.getToken(biesParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitParamList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitParamList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NullValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterNullValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitNullValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitNullValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.NullValueContext = NullValueContext;

class NumberValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(biesParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterNumberValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitNumberValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitNumberValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.NumberValueContext = NumberValueContext;

class TrueValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterTrueValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitTrueValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitTrueValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.TrueValueContext = TrueValueContext;

class StringValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(biesParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterStringValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitStringValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitStringValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.StringValueContext = StringValueContext;

class FalseValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterFalseValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitFalseValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitFalseValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.FalseValueContext = FalseValueContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AndExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterAndExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitAndExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitAndExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.AndExprContext = AndExprContext;

class BoolExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterBoolExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitBoolExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitBoolExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.BoolExprContext = BoolExprContext;

class StringExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(biesParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterStringExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitStringExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitStringExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.StringExprContext = StringExprContext;

class TrueExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterTrueExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitTrueExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitTrueExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.TrueExprContext = TrueExprContext;

class PrintStmtExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	printStmt() {
	    return this.getTypedRuleContext(PrintStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterPrintStmtExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitPrintStmtExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitPrintStmtExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.PrintStmtExprContext = PrintStmtExprContext;

class FalseExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterFalseExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitFalseExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitFalseExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.FalseExprContext = FalseExprContext;

class NullExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterNullExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitNullExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitNullExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.NullExprContext = NullExprContext;

class NumberExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(biesParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterNumberExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitNumberExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitNumberExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.NumberExprContext = NumberExprContext;

class InputExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterInputExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitInputExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitInputExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.InputExprContext = InputExprContext;

class IdentifierExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterIdentifierExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitIdentifierExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitIdentifierExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.IdentifierExprContext = IdentifierExprContext;

class StrExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterStrExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitStrExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitStrExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.StrExprContext = StrExprContext;

class ListExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterListExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitListExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitListExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.ListExprContext = ListExprContext;

class NotExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterNotExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitNotExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitNotExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.NotExprContext = NotExprContext;

class LessThanExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterLessThanExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitLessThanExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitLessThanExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.LessThanExprContext = LessThanExprContext;

class GreaterThanExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterGreaterThanExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitGreaterThanExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitGreaterThanExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.GreaterThanExprContext = GreaterThanExprContext;

class ExponentiationExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterExponentiationExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitExponentiationExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitExponentiationExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.ExponentiationExprContext = ExponentiationExprContext;

class LenExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterLenExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitLenExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitLenExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.LenExprContext = LenExprContext;

class NotEqualExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterNotEqualExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitNotEqualExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitNotEqualExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.NotEqualExprContext = NotEqualExprContext;

class OrExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterOrExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitOrExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitOrExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.OrExprContext = OrExprContext;

class NegateExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterNegateExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitNegateExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitNegateExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.NegateExprContext = NegateExprContext;

class MakeListExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterMakeListExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitMakeListExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitMakeListExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.MakeListExprContext = MakeListExprContext;

class LessThanOrEqualExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterLessThanOrEqualExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitLessThanOrEqualExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitLessThanOrEqualExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.LessThanOrEqualExprContext = LessThanOrEqualExprContext;

class FunctionCallExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterFunctionCallExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitFunctionCallExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitFunctionCallExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.FunctionCallExprContext = FunctionCallExprContext;

class MulDivExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterMulDivExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitMulDivExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitMulDivExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.MulDivExprContext = MulDivExprContext;

class IntExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterIntExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitIntExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitIntExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.IntExprContext = IntExprContext;

class ParenExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterParenExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitParenExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitParenExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.ParenExprContext = ParenExprContext;

class AddSubExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterAddSubExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitAddSubExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitAddSubExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.AddSubExprContext = AddSubExprContext;

class GreaterThanOrEqualExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.enterGreaterThanOrEqualExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesListener ) {
	        listener.exitGreaterThanOrEqualExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitGreaterThanOrEqualExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesParser.GreaterThanOrEqualExprContext = GreaterThanOrEqualExprContext;


biesParser.ProgramContext = ProgramContext; 
biesParser.VariableDeclarationContext = VariableDeclarationContext; 
biesParser.AssignmentContext = AssignmentContext; 
biesParser.FunctionDeclarationContext = FunctionDeclarationContext; 
biesParser.FunctionCallContext = FunctionCallContext; 
biesParser.PrintStmtContext = PrintStmtContext; 
biesParser.ParamListContext = ParamListContext; 
biesParser.ValueContext = ValueContext; 
biesParser.ExprContext = ExprContext; 
