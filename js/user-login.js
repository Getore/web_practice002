$(document).ready(function(){
    /**
     * 清除用户名
     */
    $("#input-clear-text-account").click(function() {
        $("#input-account").val("");
        $(this).hide();
    });
    /**
     * 清除密码
     */
    $("#input-clear-text-pass").click(function () {
        $("#input-pass").val("");
        $("#cut-line-span-id").hide();
        $("#pass-text-id").hide();
        $(this).hide();
    });
    /**
     * 显示密码
     */
    $("#pass-text-id").click(function () {
        $(this).toggleClass("text-pass");
        if ($(this).hasClass("text-pass")) {
            $(this).siblings("#input-pass").attr("type", "text");
        }else{
            $(this).siblings("#input-pass").attr("type", "password");
        }
    });
    /**
     * 记住密码
     */
    $("#remember-pass-id").click(function () {
        if ($(this).hasClass("remember-pass")) {
            $(this).toggleClass("remember-pass-remember");
        } else {
            $(this).toggleClass("remember-pass");
        }
    });
    /**
     * 当input中有输入内容时，显示清除 和 查看密码的图片
     */
    $("#input-account").keyup(function () {
        $(this).siblings("#input-clear-text-account").show();
    });
    $("#input-pass").keyup(function () {
        $(this).siblings("#pass-text-id").show();
        $(this).siblings("#cut-line-span-id").show();
        $(this).siblings("#input-clear-text-pass").show();
    });
});
