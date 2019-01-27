# AeS Print as PDF - Multiple files based on field values
This extension loops through the field and prints the current sheet as a PDF file for each field value. 

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

This extension works only through browser and not works with Qlik Sense Desktop client. 
To work with Desktop client, Launch the Desktop client and access the hub through browser http://localhost:4848/hub

Open the Qlik Sense App
Drag and Drop the extension to a desired location in the sheet
Assign the field name to the extension
Specify the output file name
Save the application
Upon clicking the button, the extension will read the field value one by one as a selected value, and download the current sheet as a PDFs


	
# Author

![aes logo transperant - small](https://cloud.githubusercontent.com/assets/18327523/14427159/d6e64e9c-0010-11e6-9532-d4682e9ea0a0.png)

Irfan Kaleel

Assure eServices - Qlik Web Team


(http://github.com/Assureeservices)
