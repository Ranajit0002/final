$(document).ready(function () {

    $("#registerForm").submit(function (e) {
        e.preventDefault();

        const username = $("#username").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();
        const message = $("#formMessage");

        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            message.text("⚠️ Please fill all fields!").removeClass().addClass("message warning");
            return;
        }

        if (password.length < 8) {
            message.text("❌ Password must be at least 6 characters!").removeClass().addClass("message error");
            return;
        }

        if (password !== confirmPassword) {
            message.text("❌ Passwords do not match!").removeClass().addClass("message error");
            return;
        }

        const emailPattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!email.match(emailPattern)) {
            message.text("❌ Invalid email address!").removeClass().addClass("message error");
            return;
        }

        message.text("✅ Registration successful!").removeClass().addClass("message success");
        $("#registerForm")[0].reset();
    });

    $(".close-btn").click(function () {
        $(".register-popup").fadeOut();
    });
});
