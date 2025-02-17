export let verificationTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Code</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; text-align: center;">
    <div style="width: 100%; max-width: 400px; margin: 20px auto; padding: 20px; background: #1E1E1E; border-radius: 8px;">
        <div style="font-size: 24px; font-weight: bold; color: #f39c12;">Tarun</div>
        <h2 style="color: #ffffff; margin-top: 20px;">Welcome!</h2>
        <p style="color: #ffffff; font-size: 14px;">Hello <user-name>, we are excited to have you on board!</p>
        <h2 style="color: #ffffff;">Your Verification Code</h2>
        <p style="color: #ffffff; font-size: 14px;">Use the code below to verify your account. This code is valid for a limited time.</p>
        <div style="font-size: 24px; font-weight: bold; background: #333; padding: 10px; border-radius: 6px; display: inline-block; margin: 15px 0; letter-spacing: 3px; color: #f39c12;">
            <actual-token>
        </div>
        <p style="color: #ffffff; font-size: 14px;">If you didn’t request this code, please ignore this email.</p>
        <div style="margin-top: 20px; font-size: 12px; color: #888;">&copy; 2025 Tarun. All rights reserved.</div>
    </div>
</body>
</html>`;

export let authenticationTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Code</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; text-align: center;">
    <div style="width: 100%; max-width: 400px; margin: 20px auto; padding: 20px; background: #1E1E1E; border-radius: 8px;">
        <div style="font-size: 24px; font-weight: bold; color: #f39c12;">Tarun</div>
        <h2 style="color: #ffffff; margin-top: 20px;">Welcome!</h2>
        <p style="color: #ffffff; font-size: 14px;">Hello <user-name>, we are excited to see you back!</p>
        <h2 style="color: #ffffff;">Your Verification Code</h2>
        <p style="color: #ffffff; font-size: 14px;">Use the code below to login to your account. This code is valid for a limited time.</p>
        <div style="font-size: 24px; font-weight: bold; background: #333; padding: 10px; border-radius: 6px; display: inline-block; margin: 15px 0; letter-spacing: 3px; color: #ffffff;">
            <actual-token>
        </div>
        <p style="color: #ffffff; font-size: 14px;">If you didn’t request this code, please ignore this email.</p>
        <div style="margin-top: 20px; font-size: 12px; color: #888;">&copy; 2025 Tarun. All rights reserved.</div>
    </div>
</body>
</html>`;

export let welcomeTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Code</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; text-align: center;">
    <div style="width: 100%; max-width: 400px; margin: 20px auto; padding: 20px; background: #1E1E1E; border-radius: 8px;">
        <div style="font-size: 24px; font-weight: bold; color: #f39c12;">Tarun</div>
        <h2 style="color: #ffffff; margin-top: 20px;">Welcome!</h2>
        <p style="color: #ffffff; font-size: 14px;">Hello <user-name>, we are excited to have you on board!</p>
       
        <p style="color: #ffffff; font-size: 14px;">you are <span style="color: #f39c12;"> successfully verifed</span> </p>
        
        
        <div style="margin-top: 20px; font-size: 12px; color: #888;">&copy; 2025 Tarun. All rights reserved.</div>
    </div>
</body>
</html>`;

export let forgotPasswordTemplate = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Link</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; text-align: center;">
    <div style="width: 100%; max-width: 400px; margin: 20px auto; padding: 20px; background: #1E1E1E; border-radius: 8px;">
      <div style="font-size: 24px; font-weight: bold; color: #f39c12;">Tarun</div>
      
      <p style="color: #ffffff; font-size: 14px;">Hello <user-name>, here is your password reset link!</p>
      <h3 style="color: #ffffff;">Your password reset link</h3>
      <p style="color: #ffffff; font-size: 14px;">Use the link below to reset your password. This code is valid for a limited time.</p>
      
      <!-- Styled link as a button -->
      <a href="[actual-link]" style="font-size: 15px; font-weight: bold; background: #333; padding: 10px 20px; border-radius: 6px; display: inline-block; margin: 15px 0; letter-spacing: 3px; color: #f39c12; text-decoration: none;">
        Reset Password
      </a>
      <div>(or)</div>
      
      <div>
        <a href="[actual-link]" style="color: #f39c12; text-decoration: none;">[actual-link]</a>
      </div>
       
      <p style="color: #ffffff; font-size: 14px;">If you didn’t request this code, please ignore this email.</p>
      <div style="margin-top: 20px; font-size: 12px; color: #888;">&copy; 2025 Tarun. All rights reserved.</div>
    </div>
  </body>
</html>`;

export let passwordResetSuccessfulTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Code</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; text-align: center;">
    <div style="width: 100%; max-width: 400px; margin: 20px auto; padding: 20px; background: #1E1E1E; border-radius: 8px;">
        <div style="font-size: 24px; font-weight: bold; color: #f39c12;">Tarun</div>
        
        
        <p style="color: #ffffff; font-size: 14px;">Hello <user-name>, we are here to inform you that</p>
        <p style="color: #ffffff; font-size: 14px;">your  password reset is  <span style="color: #f39c12;"> successful</span> </p>
        
        
        <div style="margin-top: 20px; font-size: 12px; color: #888;">&copy; 2025 Tarun. All rights reserved.</div>
    </div>
</body>
</html>`;

export let loginTemplate = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Logged In Notification</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; text-align: center;">
  <div style="width: 100%; max-width: 400px; margin: 20px auto; padding: 20px; background: #1E1E1E; border-radius: 8px;">
    <div style="font-size: 24px; font-weight: bold; color: #f39c12;">Tarun</div>

    <p style="color: #ffffff; font-size: 14px;">Hello <user-name>,</p>
    <p style="color: #ffffff; font-size: 14px;">
      We are writing to let you know that you are currently logged in to your account.
    </p>
    <p style="color: #ffffff; font-size: 14px;">
      If this wasn't you or you suspect any unauthorized activity, please secure your account immediately.
    </p>

    <div style="margin-top: 20px; font-size: 12px; color: #888;">&copy; 2025 Tarun. All rights reserved.</div>
  </div>
</body>
</html>
`;
