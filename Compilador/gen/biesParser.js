// Generated from grammar/bies.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesListener from './biesListener.js';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,15,81,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,
26,8,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,5,3,40,8,3,10,3,12,
3,43,9,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,51,8,4,10,4,12,4,54,9,4,3,4,56,8,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,68,8,4,1,4,1,4,1,4,1,4,1,4,1,
4,5,4,76,8,4,10,4,12,4,79,9,4,1,4,0,1,8,5,0,2,4,6,8,0,2,1,0,8,9,1,0,10,11,
89,0,15,1,0,0,0,2,20,1,0,0,0,4,31,1,0,0,0,6,36,1,0,0,0,8,67,1,0,0,0,10,14,
3,2,1,0,11,14,3,4,2,0,12,14,3,8,4,0,13,10,1,0,0,0,13,11,1,0,0,0,13,12,1,
0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,17,15,1,0,
0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,21,5,1,0,0,21,22,5,12,0,0,22,23,5,2,0,
0,23,25,5,3,0,0,24,26,3,6,3,0,25,24,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,
27,28,5,4,0,0,28,29,5,5,0,0,29,30,3,8,4,0,30,3,1,0,0,0,31,32,5,6,0,0,32,
33,5,3,0,0,33,34,3,8,4,0,34,35,5,4,0,0,35,5,1,0,0,0,36,41,5,12,0,0,37,38,
5,7,0,0,38,40,5,12,0,0,39,37,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,
0,0,0,42,7,1,0,0,0,43,41,1,0,0,0,44,45,6,4,-1,0,45,46,5,12,0,0,46,55,5,3,
0,0,47,52,3,8,4,0,48,49,5,7,0,0,49,51,3,8,4,0,50,48,1,0,0,0,51,54,1,0,0,
0,52,50,1,0,0,0,52,53,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,55,47,1,0,0,0,
55,56,1,0,0,0,56,57,1,0,0,0,57,68,5,4,0,0,58,59,5,3,0,0,59,60,3,8,4,0,60,
61,5,4,0,0,61,68,1,0,0,0,62,63,5,11,0,0,63,68,3,8,4,4,64,68,5,12,0,0,65,
68,5,13,0,0,66,68,5,14,0,0,67,44,1,0,0,0,67,58,1,0,0,0,67,62,1,0,0,0,67,
64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,77,1,0,0,0,69,70,10,7,0,0,70,71,
7,0,0,0,71,76,3,8,4,8,72,73,10,6,0,0,73,74,7,1,0,0,74,76,3,8,4,7,75,69,1,
0,0,0,75,72,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,9,1,0,0,
0,79,77,1,0,0,0,9,13,15,25,41,52,55,67,75,77];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesParser extends antlr4.Parser {

    static grammarFileName = "bies.g4";
    static literalNames = [ null, "'let'", "'='", "'('", "')'", "'=>'", 
                            "'print'", "','", "'*'", "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ID", "NUMBER", "STRING", 
                             "WS" ];
    static ruleNames = [ "program", "functionDeclaration", "printStmt", 
                         "paramList", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesParser.ruleNames;
        this.literalNames = biesParser.literalNames;
        this.symbolicNames = biesParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
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
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 30794) !== 0)) {
	            this.state = 13;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 10;
	                this.functionDeclaration();
	                break;
	            case 6:
	                this.state = 11;
	                this.printStmt();
	                break;
	            case 3:
	            case 11:
	            case 12:
	            case 13:
	            case 14:
	                this.state = 12;
	                this.expr(0);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(biesParser.T__0);
	        this.state = 21;
	        this.match(biesParser.ID);
	        this.state = 22;
	        this.match(biesParser.T__1);
	        this.state = 23;
	        this.match(biesParser.T__2);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 24;
	            this.paramList();
	        }

	        this.state = 27;
	        this.match(biesParser.T__3);
	        this.state = 28;
	        this.match(biesParser.T__4);
	        this.state = 29;
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



	printStmt() {
	    let localctx = new PrintStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesParser.RULE_printStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(biesParser.T__5);
	        this.state = 32;
	        this.match(biesParser.T__2);
	        this.state = 33;
	        this.expr(0);
	        this.state = 34;
	        this.match(biesParser.T__3);
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
	    this.enterRule(localctx, 6, biesParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(biesParser.ID);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 37;
	            this.match(biesParser.T__6);
	            this.state = 38;
	            this.match(biesParser.ID);
	            this.state = 43;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, biesParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 45;
	            this.match(biesParser.ID);
	            this.state = 46;
	            this.match(biesParser.T__2);
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 30728) !== 0)) {
	                this.state = 47;
	                this.expr(0);
	                this.state = 52;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 48;
	                    this.match(biesParser.T__6);
	                    this.state = 49;
	                    this.expr(0);
	                    this.state = 54;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 57;
	            this.match(biesParser.T__3);
	            break;

	        case 2:
	            localctx = new ParenExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 58;
	            this.match(biesParser.T__2);
	            this.state = 59;
	            this.expr(0);
	            this.state = 60;
	            this.match(biesParser.T__3);
	            break;

	        case 3:
	            localctx = new NegateExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 62;
	            this.match(biesParser.T__10);
	            this.state = 63;
	            this.expr(4);
	            break;

	        case 4:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            this.match(biesParser.ID);
	            break;

	        case 5:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 65;
	            this.match(biesParser.NUMBER);
	            break;

	        case 6:
	            localctx = new StringExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 66;
	            this.match(biesParser.STRING);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 75;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 69;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 70;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 71;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesParser.RULE_expr);
	                    this.state = 72;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 73;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 74;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
biesParser.ID = 12;
biesParser.NUMBER = 13;
biesParser.STRING = 14;
biesParser.WS = 15;

biesParser.RULE_program = 0;
biesParser.RULE_functionDeclaration = 1;
biesParser.RULE_printStmt = 2;
biesParser.RULE_paramList = 3;
biesParser.RULE_expr = 4;

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

class FunctionCallExprContext extends ExprContext {

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


biesParser.ProgramContext = ProgramContext; 
biesParser.FunctionDeclarationContext = FunctionDeclarationContext; 
biesParser.PrintStmtContext = PrintStmtContext; 
biesParser.ParamListContext = ParamListContext; 
biesParser.ExprContext = ExprContext; 
