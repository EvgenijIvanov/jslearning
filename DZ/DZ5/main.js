/* ДОМАШКА*/
/*
 * 1. Пофиксить вывод i (по аналогии с предыдущей задачей);
 * 2. Сделать так, чтобы каждый таймаут срабатывал с разницей
 *   в одну секунду. (первый - 1с, второй - 2с, третий - 3с и т.д.)
 */

for (var i = 1; i <= 10; i++) {
	(function(j){
   setTimeout(function() {
      console.log(j);
   }, (1000*j));
   })(i);
}