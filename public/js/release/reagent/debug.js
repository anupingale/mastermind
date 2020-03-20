// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25414__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25415__i = 0, G__25415__a = new Array(arguments.length -  0);
while (G__25415__i < G__25415__a.length) {G__25415__a[G__25415__i] = arguments[G__25415__i + 0]; ++G__25415__i;}
  args = new cljs.core.IndexedSeq(G__25415__a,0,null);
} 
return G__25414__delegate.call(this,args);};
G__25414.cljs$lang$maxFixedArity = 0;
G__25414.cljs$lang$applyTo = (function (arglist__25416){
var args = cljs.core.seq(arglist__25416);
return G__25414__delegate(args);
});
G__25414.cljs$core$IFn$_invoke$arity$variadic = G__25414__delegate;
return G__25414;
})()
);

(o.error = (function() { 
var G__25417__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25418__i = 0, G__25418__a = new Array(arguments.length -  0);
while (G__25418__i < G__25418__a.length) {G__25418__a[G__25418__i] = arguments[G__25418__i + 0]; ++G__25418__i;}
  args = new cljs.core.IndexedSeq(G__25418__a,0,null);
} 
return G__25417__delegate.call(this,args);};
G__25417.cljs$lang$maxFixedArity = 0;
G__25417.cljs$lang$applyTo = (function (arglist__25419){
var args = cljs.core.seq(arglist__25419);
return G__25417__delegate(args);
});
G__25417.cljs$core$IFn$_invoke$arity$variadic = G__25417__delegate;
return G__25417;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
