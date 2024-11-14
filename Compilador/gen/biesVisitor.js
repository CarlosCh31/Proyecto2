// Generated from grammar/bies.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by biesParser.

export default class biesVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by biesParser#program.
	visitProgram(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#functionDeclaration.
	visitFunctionDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#printStmt.
	visitPrintStmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#paramList.
	visitParamList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#StringExpr.
	visitStringExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#FunctionCallExpr.
	visitFunctionCallExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#MulDivExpr.
	visitMulDivExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#NumberExpr.
	visitNumberExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#IdentifierExpr.
	visitIdentifierExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#ParenExpr.
	visitParenExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#AddSubExpr.
	visitAddSubExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesParser#NegateExpr.
	visitNegateExpr(ctx) {
	  return this.visitChildren(ctx);
	}



}