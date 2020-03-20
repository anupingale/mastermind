// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('mastermind.logic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
mastermind.logic.colors = cljs.core.range.cljs$core$IFn$_invoke$arity$1((8));
mastermind.logic.generate_code = (function mastermind$logic$generate_code(){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.shuffle(mastermind.logic.colors));
});
mastermind.logic.get_reds = (function mastermind$logic$get_reds(code,pattern){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__25491_SHARP_,p2__25492_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25491_SHARP_,p2__25492_SHARP_);
}),code,pattern)));
});
mastermind.logic.get_whites = (function mastermind$logic$get_whites(code,pattern){
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25493_SHARP_){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,p1__25493_SHARP_),code);
}),cljs.core.set(pattern)))) - mastermind.logic.get_reds(code,pattern));
});
mastermind.logic.get_result = (function mastermind$logic$get_result(code,pattern){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(mastermind.logic.get_reds(code,pattern),cljs.core.cst$kw$r),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(mastermind.logic.get_whites(code,pattern),cljs.core.cst$kw$w),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((5),cljs.core.cst$kw$other)], 0))));
});
mastermind.logic.won_QMARK_ = (function mastermind$logic$won_QMARK_(code,pattern){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.cst$kw$r),mastermind.logic.get_result(code,pattern));
});
