// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('mastermind.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('mastermind.logic');
mastermind.core.colors = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","green","purple","maroon","blue","darkorange","darkgoldenrod","black","gray"], null);
mastermind.core.results = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,"red",cljs.core.cst$kw$w,"white",cljs.core.cst$kw$other,"gray"], null);
mastermind.core.get_game = (function mastermind$core$get_game(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$code,mastermind.logic.generate_code(),cljs.core.cst$kw$current_DASH_turn,(0),cljs.core.cst$kw$attempts,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((12),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guess,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(8),(8),(8)], null),cljs.core.cst$kw$result,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$other,cljs.core.cst$kw$other,cljs.core.cst$kw$other,cljs.core.cst$kw$other,cljs.core.cst$kw$other], null)], null))),cljs.core.cst$kw$selected_DASH_color,(0),cljs.core.cst$kw$won_QMARK_,false], null);
});
if((typeof mastermind !== 'undefined') && (typeof mastermind.core !== 'undefined') && (typeof mastermind.core.game !== 'undefined')){
} else {
mastermind.core.game = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(mastermind.core.get_game());
}
mastermind.core.reset_game = (function mastermind$core$reset_game(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mastermind.core.game,mastermind.core.get_game);
});
mastermind.core.change = (function mastermind$core$change(index,arr){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arr,index,cljs.core.cst$kw$selected_DASH_color.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)));
});
mastermind.core.set_color = (function mastermind$core$set_color(turn,index){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mastermind.core.game,cljs.core.assoc,cljs.core.cst$kw$attempts,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$attempts.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [turn,cljs.core.cst$kw$guess], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mastermind.core.change,index)));
});
mastermind.core.draw_color = (function mastermind$core$draw_color(turn,index,attempt){
var is_clickable = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turn,cljs.core.cst$kw$current_DASH_turn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,["radial-gradient(circle at 65% 15%, white 1px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((mastermind.core.colors.cljs$core$IFn$_invoke$arity$1 ? mastermind.core.colors.cljs$core$IFn$_invoke$arity$1(attempt) : mastermind.core.colors.call(null,attempt)))," 60%)"].join('')], null),cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color",((is_clickable)?"clickable":null)], null),cljs.core.cst$kw$key,index,cljs.core.cst$kw$onClick,((is_clickable)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(mastermind.core.set_color,turn,index):null)], null)], null);
});
mastermind.core.draw_attempt = (function mastermind$core$draw_attempt(attempt,turn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["attempt",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turn,cljs.core.cst$kw$current_DASH_turn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game))))?"current-turn":null)], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mastermind.core.draw_color,turn),attempt)], null);
});
mastermind.core.draw_attempt_result_colors = (function mastermind$core$draw_attempt_result_colors(index,result){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,(mastermind.core.results.cljs$core$IFn$_invoke$arity$1 ? mastermind.core.results.cljs$core$IFn$_invoke$arity$1(result) : mastermind.core.results.call(null,result))], null),cljs.core.cst$kw$class,"result",cljs.core.cst$kw$key,index], null)], null);
});
mastermind.core.draw_attempt_result = (function mastermind$core$draw_attempt_result(result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"attempt-result"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(mastermind.core.draw_attempt_result_colors,result)], null);
});
mastermind.core.draw_color_palatte = (function mastermind$core$draw_color_palatte(index,color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,["radial-gradient(circle at 65% 15%, white 1px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)," 60%)"].join('')], null),cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color","clickable",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.cst$kw$selected_DASH_color.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game))))?"selected":null)], null),cljs.core.cst$kw$onClick,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mastermind.core.game,cljs.core.assoc,cljs.core.cst$kw$selected_DASH_color,index);
}),cljs.core.cst$kw$key,index], null)], null);
});
mastermind.core.validate_guess = (function mastermind$core$validate_guess(){
var current_turn = cljs.core.cst$kw$current_DASH_turn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game));
var attempts = cljs.core.cst$kw$attempts.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game));
if((current_turn < (12))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mastermind.core.game,cljs.core.assoc,cljs.core.cst$kw$attempts,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attempts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_turn,cljs.core.cst$kw$result], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(mastermind.logic.get_result,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)),cljs.core.cst$kw$guess.cljs$core$IFn$_invoke$arity$1((attempts.cljs$core$IFn$_invoke$arity$1 ? attempts.cljs$core$IFn$_invoke$arity$1(current_turn) : attempts.call(null,current_turn))))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mastermind.core.game,cljs.core.assoc,cljs.core.cst$kw$won_QMARK_,mastermind.logic.won_QMARK_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)),cljs.core.cst$kw$guess.cljs$core$IFn$_invoke$arity$1((attempts.cljs$core$IFn$_invoke$arity$1 ? attempts.cljs$core$IFn$_invoke$arity$1(current_turn) : attempts.call(null,current_turn)))));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mastermind.core.game,cljs.core.assoc,cljs.core.cst$kw$current_DASH_turn,(current_turn + (1)));
});
mastermind.core.draw_board = (function mastermind$core$draw_board(turn,attempt){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"guess",cljs.core.cst$kw$key,turn], null),mastermind.core.draw_attempt(cljs.core.cst$kw$guess.cljs$core$IFn$_invoke$arity$1(attempt),turn),mastermind.core.draw_attempt_result(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(attempt))], null);
});
mastermind.core.home_page = (function mastermind$core$home_page(){
var is_code_complete = (((cljs.core.cst$kw$current_DASH_turn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)) < (12)))?cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,(8)),cljs.core.cst$kw$guess.cljs$core$IFn$_invoke$arity$1((function (){var G__26001 = cljs.core.cst$kw$current_DASH_turn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game));
var fexpr__26000 = cljs.core.cst$kw$attempts.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game));
return (fexpr__26000.cljs$core$IFn$_invoke$arity$1 ? fexpr__26000.cljs$core$IFn$_invoke$arity$1(G__26001) : fexpr__26000.call(null,G__26001));
})())):null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"header"], null),"Mastermind"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal",(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.cst$kw$won_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (cljs.core.cst$kw$current_DASH_turn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)) > (11));
}
})())?"display-block":null)], null),cljs.core.cst$kw$id,"popup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,(cljs.core.truth_(cljs.core.cst$kw$won_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)))?"Won the Game":"Lose the Game")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"close",cljs.core.cst$kw$class,"close",cljs.core.cst$kw$onClick,mastermind.core.reset_game], null),"Play Again"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board",(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.cst$kw$won_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (cljs.core.cst$kw$current_DASH_turn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)) > (11));
}
})())?"disable-pointer-events":null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"secret"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["attempt","code"], null)], null),(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.cst$kw$won_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (cljs.core.cst$kw$current_DASH_turn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)) > (11));
}
})())?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mastermind.core.draw_color,null),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game))):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"btn-wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["submit-btn",(cljs.core.truth_(is_code_complete)?null:"disable-btn")], null),cljs.core.cst$kw$onClick,(cljs.core.truth_(is_code_complete)?mastermind.core.validate_guess:null)], null),"Submit"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"guesses"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(mastermind.core.draw_board,cljs.core.cst$kw$attempts.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mastermind.core.game)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"color-palette"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(mastermind.core.draw_color_palatte,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(mastermind.core.colors))], null)], null);
});
mastermind.core.mount_root = (function mastermind$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mastermind.core.home_page], null),document.getElementById("app"));
});
mastermind.core.init_BANG_ = (function mastermind$core$init_BANG_(){
return mastermind.core.mount_root();
});
