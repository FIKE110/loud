
export const welcomeEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Loud</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff;">
                    <tr>
                        <td align="center" style="padding: 40px 0; background-color: #01B2FE; color: #ffffff;">
                            <h1>Welcome to Loud, ${name}!</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p>We are thrilled to have you join the Loud family.</p>
                            <p>Get ready to experience the best services tailored just for you.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px 30px; background-color: #f4f4f4;">
                            <p style="margin: 0;">© 2026 Loud. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;
