$(document).ready(function () {

    $("#loginForm").submit(function (e) {
        e.preventDefault();

        const account = $("#account").val().trim();
        const password = $("#password").val();
        const message = $("#formMessage");

        if (account === "" || password === "") {
            message.text("⚠️ Please fill all fields!").removeClass().addClass("message warning");
            return;
        }

        if (password.length < 6) {
            message.text("❌ Password must be at least 6 characters!").removeClass().addClass("message error");
            return;
        }

        // Success
        message.text("✅ Login successful!").removeClass().addClass("message success");
        $("#loginForm")[0].reset();
    });

    $(".close-btn").click(function () {
        $(".login-popup").fadeOut();
    });
});
