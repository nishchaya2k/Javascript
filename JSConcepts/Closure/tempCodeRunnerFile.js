function x(fun) {
    fun();
}
x(function y() {
    console.log("Hello");
});
