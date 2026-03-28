type NewMessageEmailParams = {
  recipientName: string;
  email: string;
  message?: string;
  reason?: string;
  phone?: string;
};

const escapeHtml = (str: string) =>
  String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export function newContactMessageTemplate(params: NewMessageEmailParams) {
  const recipientName = escapeHtml(params.recipientName);
  const email = escapeHtml(params.email);
  const message = escapeHtml(params?.message ?? "");
  const phone = escapeHtml(params?.phone ?? "");

  return `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>InsurMD</title>
  <meta name="viewport" content="initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

  <style type="text/css">
    [style*=Lato]{font-family:"Poppins",sans-serif;}
    .gmailfix{display:none!important;}
    html,body{background-color:#ebedef;margin:0;padding:0;}
    table{border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;}
    table td{border-collapse:collapse;}
    img{height:auto!important;line-height:100%;outline:none;text-decoration:none;display:block!important;-ms-interpolation-mode:bicubic;}
    @media only screen and (max-width:650px){
      body{width:auto!important;}
      table[class=full-width]{width:100%!important;}
      td[class=text-center]{text-align:center!important;}
      td[class=image-100-percent] img{width:100%!important;height:auto!important;max-width:100%!important;}
    }
    @media only screen and (max-width:479px){
      body{font-size:10px!important;}
      table[class=container]{width:95%!important;}
      td[class=full-width] img,td[class=image-100-percent] img,img[class=image-100-percent]{width:100%!important;height:auto!important;max-width:100%!important;min-width:124px!important;}
      div[class=text-center]{text-align:center!important;}
      [class~=hide_on_mobile]{display:none!important;}
    }
  </style>
</head>

<body>
  <table bgcolor="#EFEFEF" width="100%" class="full-width" border="0" align="center" cellpadding="0" cellspacing="0">
    <tbody>
      
      <tr>
        <td>
          <table bgcolor="#FFFFFF" width="640" align="center" border="0" cellspacing="0" cellpadding="0" class="full-width">
            <tbody>
              <tr>
                <td align="center" valign="top" class="fix-box">
                  <table bgcolor="#FFFFFF" width="640" align="center" border="0" cellspacing="0" cellpadding="0" class="full-width">
                    <tbody>
                      <tr>
                        <td bgcolor="#FFFFFF">
                          <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                            <tbody>

                              <tr>
                                <td bgcolor="#FFFFFF" align="center" valign="top" class="fix-box">
                                  <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" class="full-width">
                                    <tbody>
                                      <tr>
                                        <td width="20"></td>
                                        <td style="padding-top: 20px;padding-bottom: 20px ">
                                          <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                            <tbody>
                                              <tr>
                                                <td bgcolor="#E9EDF5" class="whitebutton text-center" width="100%"
                                                  style="border-radius:10px;padding:20px;">
                                                  <table width="100%" align="center" cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                      <tr>
                                                        <td class="whitebutton text-center" width="100%" align="center"
                                                          style="font-family:'Poppins',sans-serif;font-size:22px;line-height:26px;font-weight:700;color:#000;text-align:center;padding-top:10px">
                                                          <!-- SVG ICON (kept as-is) -->
                                                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.4"
                                                              d="M22.25 11.6771C22.25 16.9602 17.7722 21.2438 12.25 21.2438C11.6007 21.2446 10.9532 21.1846 10.3154 21.0648C9.85633 20.9786 9.62678 20.9355 9.46653 20.96C9.30627 20.9844 9.07918 21.1052 8.62499 21.3467C7.34014 22.03 5.84195 22.2713 4.40111 22.0033C4.94874 21.3297 5.32275 20.5216 5.48778 19.6551C5.58778 19.1252 5.34 18.6103 4.96889 18.2335C3.28333 16.5219 2.25 14.2154 2.25 11.6771C2.25 6.39392 6.72778 2.11035 12.25 2.11035C17.7722 2.11035 22.25 6.39392 22.25 11.6771Z"
                                                              fill="#0BA5EC" />
                                                            <path
                                                              d="M7.25 12.1113C7.25 11.559 7.69772 11.1113 8.25 11.1113H8.25897C8.81126 11.1113 9.25897 11.559 9.25897 12.1113C9.25897 12.6635 8.81126 13.1113 8.25897 13.1113H8.25C7.69772 13.1113 7.25 12.6635 7.25 12.1113Z"
                                                              fill="#0BA5EC" />
                                                            <path
                                                              d="M11.2455 12.1113C11.2455 11.559 11.6932 11.1113 12.2455 11.1113H12.2545C12.8068 11.1113 13.2545 11.559 13.2545 12.1113C13.2545 12.6635 12.8068 13.1113 12.2545 13.1113H12.2455C11.6932 13.1113 11.2455 12.6635 11.2455 12.1113Z"
                                                              fill="#0BA5EC" />
                                                            <path
                                                              d="M16.241 11.1113C15.6887 11.1113 15.241 11.559 15.241 12.1113C15.241 12.6635 15.6887 13.1113 16.241 13.1113H16.25C16.8023 13.1113 17.25 12.6635 17.25 12.1113C17.25 11.559 16.8023 11.1113 16.25 11.1113H16.241Z"
                                                              fill="#0BA5EC" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M1.5 11.6781C1.5 5.94972 6.34523 1.36133 12.25 1.36133C18.1548 1.36133 23 5.94972 23 11.6781C23 17.4064 18.1548 21.9948 12.25 21.9948C11.5541 21.9956 10.8603 21.9313 10.177 21.8029C9.93979 21.7584 9.78909 21.7303 9.67696 21.7149C9.6284 21.7082 9.59829 21.7058 9.58186 21.7048L9.59625 21.6994C9.59625 21.6994 9.59016 21.7008 9.57976 21.7024L9.57144 21.7035L9.56579 21.704C9.56579 21.704 9.57064 21.7041 9.58186 21.7048C9.56489 21.7113 9.53193 21.7247 9.47775 21.7504C9.36322 21.8048 9.21068 21.8857 8.97714 22.0099C7.54542 22.7713 5.87504 23.0413 4.26396 22.7417C4.00381 22.6933 3.7884 22.5114 3.69713 22.263C3.60586 22.0146 3.65224 21.7365 3.81917 21.5312C4.28697 20.9558 4.60863 20.2627 4.75088 19.5165C4.78937 19.3114 4.70227 19.0326 4.43451 18.7607C2.61972 16.9179 1.5 14.4257 1.5 11.6781Z"
                                                              fill="#0BA5EC" />
                                                          </svg>
                                                        </td>
                                                      </tr>

                                              


                                               <tr>
                                                        <td class="whitebutton text-center" width="100%" align="center"
                                                          style="font-family:'Poppins',sans-serif;font-size:22px;line-height:26px;font-weight:700;color:#000;text-align:center;padding-top:10px">
                                                         <a href="https://audit-lab.vercel.app/" target="_blank"><img
                                      src="https://insur-md-web.vercel.app/images/logo.svg"
                                      alt="image" align="center" width="180"></a>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td class="whitebutton text-center" width="100%" align="center"
                                                          style="font-family:'Poppins',sans-serif;font-size:22px;line-height:26px;font-weight:700;color:#000;text-align:center;padding-top:40px">
                                                          New Contact Message
                                                        </td>
                                                      </tr>

                                                    

                                                      <tr>
                                                        <td class="whitebutton text-center" width="100%" align="center"
                                                          style="font-family:'Poppins',sans-serif;font-size:16px;line-height:22px;font-weight:500;color:#000;text-align:center;padding-top:10px">
                                                         ${recipientName} wants to connect.
                                                        </td>
                                                      </tr>

                                                      

                                                    <tr>
                                                        <td class="whitebutton text-center" width="100%" align="center"
                                                          style="font-family:'Poppins',sans-serif;font-size:16px;line-height:22px;font-weight:500;color:#000;text-align:center;padding-top:10px">
                                                         Email: ${email}
                                                        </td>
                                                      </tr>

                                                      ${
                                                        params.phone?.trim()
                                                          ? `<tr>
       <td class="whitebutton text-center" width="100%" align="center"
         style="font-family:'Poppins',sans-serif;font-size:16px;line-height:22px;font-weight:500;color:#000;text-align:center;padding-top:10px">
         Phone: ${escapeHtml(params.phone.trim())} 
       </td>
     </tr>`
                                                          : ""
                                                      }

                                                      ${
                                                        params.message?.trim()
                                                          ? `<tr>
       <td class="whitebutton text-center" width="100%" align="center"
         style="font-family:'Poppins',sans-serif;font-size:16px;line-height:22px;font-weight:500;color:#000;text-align:center;padding-top:10px">
         Message: ${escapeHtml(params.message.trim())} 
       </td>
     </tr>`
                                                          : ""
                                                      }

                                                        ${
                                                          params.reason?.trim()
                                                            ? `<tr>
       <td class="whitebutton text-center" width="100%" align="center"
         style="font-family:'Poppins',sans-serif;font-size:16px;line-height:22px;font-weight:500;color:#000;text-align:center;padding-top:10px">
         Reason: ${escapeHtml(params.reason.trim())} 
       </td>
     </tr>`
                                                            : ""
                                                        }

                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td width="20"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>

                              <tr>
                                <td bgcolor="#06263B" align="center" valign="top" class="fix-box">
                                  <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" class="full-width">
                                    <tbody>
                                      <tr>
                                        <td width="20"></td>
                                        <td style="padding-top: 40px;padding-bottom:20px;">
                                          <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                                            <tbody>

                                             


                                              <tr>
                                                <td class="whitebutton text-center" width="100%" align="center"
                                                  style="font-family:'Poppins',sans-serif;font-size:14px;line-height:16px;font-weight:400;color:#FFFFFF;text-align:center;padding-top:15px;">
                                                  © ${new Date().getFullYear()}, InsurMD
                                                </td>
                                              </tr>

                                            </tbody>
                                          </table>
                                        </td>
                                        <td width="20"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>

                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="gmailfix" style="white-space:nowrap;font:15px courier;line-height:0;"></div>
</body>
</html>`;
}
