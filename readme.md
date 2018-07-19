# AeS Print as PDF
This extension will take a snapshot of current sheet based on field selection and print as multiple PDF file

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Author](#author)

#Screenshot
![pdf](https://user-images.githubusercontent.com/18327523/42938875-657e0396-8b71-11e8-9eca-a6bca7ee8932.png)  


# Installation

1. Install the latest version of Qlik Sense Desktop in your machine (http://www.qlik.com/try-or-buy/download-qlik-sense).

2. Download AeS Print as PDF and extract the zip file into the following location "C:\Users\%USERNAME%\Documents\Qlik\Sense\Extensions\"

*See instructions 
[How to import an extension on Qlik Sense Server]
(http://help.qlik.com/sense/en-US/online/#../Subsystems/Qlik_Management_Console_help/Content/QMC_Resources_Extensions_AddingExtensions.htm?Highlight=extension)

#Usage

Note: This extension does not print in desktop application. So use single configurator URL or HUB to print the current sheet as multiple PDF file based on field selection.

1. Drag and drop the visualization extension into a Qlik Sense sheet.

2. Enter the valid field name to select the values automatically.

3. You can change the output file name without extension as you want.

4. Save and reload the application. 

5. Open the browser and type the URL http://localhost:4848/dev-hub/single-configurator 

6. Select an app(qvf) which you have the extension(AeS Sheet as PDF File).

7. Select the sheet which you want to print as PDF file.

8. Copy the single configurator URL and open it in another tab.

9. Click the "PDF Download" image button.

10.You entered field values will be select one by one and current sheet will be exported as multiple PDF file.


	
# Author

![aes logo transperant - small](https://cloud.githubusercontent.com/assets/18327523/14427159/d6e64e9c-0010-11e6-9532-d4682e9ea0a0.png)

**Assure eServices Inc., **

(http://github.com/Assureeservices)
