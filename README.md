# Image Analysis API  V1.0
Made with [Analyze Image API](https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-image-analysis?tabs=3-2)


The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image. It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences. Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

This operation extracts a rich set of visual features based on the image content.

Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.

A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
POST

# How Analyze Image API works?
We are utilizing the Computer Vision Image Analysis service to extract a wide range of visual attributes from various photographs. It may, for example, assess whether an image contains adult content, whether they are male or female, discover certain brands or things, or find human faces. 
Image Analysis usually recognizes human faces in an image and generates rectangle coordinates for each face found in an image. The face detection function is actually a   part of the Analyze Image API. This API can be accessed using a native SDK or REST calls. In the project, it detects the persons' age, and gender using the image provided and also provides a face rectangle which includes the left, top, width, and height lengths of the face rectangle. 

# Object recognition:
In order to recognize items in pictures or videos, computer vision techniques called object recognition is used. 

Image Analysis works on pictures that meet these criteria:
The image must be in one of the following formats: JPEG, PNG, GIF, or BMP.
The image file must be smaller than 4 megabytes (MB)
The image must be bigger than 50 x 50 pixels and smaller than 16,000 x 16,000 pixels.

# How it works?
When an image is given as input, it recognizes the objects and gives us the image tags with rectangles around the object indicating what is that particular object.

![image](https://user-images.githubusercontent.com/71330830/117388615-120da900-aeb9-11eb-8559-7d4ffedaf994.png)


## Try out [SWAGGER playground](http://143.198.185.27:8000/docs/)!!

### Host:
```
http://143.198.185.27:8000/
```
### Query Pararameters:
There are no query parameters needed

### Request URL:
```
http://143.198.185.27:8000/api/v1/image-analysis
```
### Request Headers:
Since the input to the Image Analysis API is image URL, then set request header as below:
```
'Content-Type': 'application/json'
```
### Request body
Input passed within the POST body. 
Supported input methods: image URL.

**Input requirements:**
-	Supported image formats: JPEG, PNG, BMP, PDF and TIFF.
-	Please do note MPO (Multi Picture Objects) embedded JPEG files are not supported.
- For multi-page PDF and TIFF documents:  currently, this API is supporting 2 pages processing only.
- Image file size must be less than 4 MB.
- The image/document page dimensions must be at least 50 x 50 pixels and at most 10000 x 10000 pixels.
-	The PDF file dimensions must be at most 17 x 17 inches, corresponding to Legal or A3 paper sizes and smaller.

## Possible Responses :
| Response code | Description |
| --- | --- |
| 200 | OK |
| 400 | Input Validation Failed |
| 500 | Internal Server Error |
#
#
### 200 : OK
This response code means a successful response received.

JSON fields in the response body and their descrption:

| Fields| Type | Description |
| --- | --- | --- |
| Success | boolean | Indicates whether response received successfully or not |
| Objects | [Object]	 | 	List of objects in the image. If there is a dog, a cat, and a person in an image, the Detect operation will list those things along with where they are in the image. You can use this feature to find out more about how things in an image are connected to each other. |
| tags | [Object]	 | List of tags realted to the image |
| rectangle | [Number]	 | Rectangle bounding box of a object in the image, The coordinates are specified relative to the top-left of the original image. The four numbers represent the top left corner point,width and height of the object. |
| captions | [Object]	 | The description of the image in words with confidence |
| text | String | description of image in text |
| confidence | Number	 | Confidence value between 0 and 1 inclusive. |
| width | Number	 | The width of the image rectangle in pixels/inches, respectively. |
| height | Number	 | 	The height of the image rectangle in pixels/inches, respectively. |

#

## Example - SWAGGER 
Swagger playground for TextScanner API is available on below url:
```
http://143.198.185.27:8000/docs/
```
#
https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F38%2FDetected-with-YOLO--Schreibtisch-mit-Objekten.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FObject_detection&tbnid=CeGn9NCnSTk2iM&vet=12ahUKEwj5xcivov37AhXaD1kFHeLVA8QQMygAegUIARDhAQ..i&docid=NZgI-_CyMhb-xM&w=2259&h=1453&q=object%20recognition&hl=en&ved=2ahUKEwj5xcivov37AhXaD1kFHeLVA8QQMygAegUIARDhAQ 
#
## Example - Postman
https://drive.google.com/file/d/1fXjRqua0bZcBM2JiV7DHq1Tr9hSPazNu/view?usp=sharing
#
#
A successful response is returned in JSON. The sample application parses and displays a successful response in the command prompt window, similar to the following example:
```JSON
{
    "description": {
        "tags": [
            "person",
            "outdoor",
            "tree",
            "smiling",
            "posing"
        ],
        "captions": [
            {
                "text": "a man and woman holding a baby",
                "confidence": 0.552068293094635
            }
        ]
    },
    "objects": [
        {
            "rectangle": {
                "x": 513,
                "y": 304,
                "w": 187,
                "h": 337
            },
            "object": "person",
            "confidence": 0.612
        },
        {
            "rectangle": {
                "x": 264,
                "y": 14,
                "w": 406,
                "h": 657
            },
            "object": "person",
            "confidence": 0.913
        },
        {
            "rectangle": {
                "x": 534,
                "y": 177,
                "w": 389,
                "h": 495
            },
            "object": "person",
            "confidence": 0.906
        }
    ],
    "requestId": "ceeb3ca1-e041-47ad-927a-448d8a50215d",
    "metadata": {
        "width": 1024,
        "height": 682,
        "format": "Jpeg"
    },
    "modelVersion": "2021-05-01"
}
```
#
## 400: Input Validation Failed

If there is a problem with the supplied input url to the Image Analysis API, then response is received will be as below:.
```
Invalid request
}
```
#

## 500: Internal Server Error
If problem is due to the Azure API service, then example response will be as below:
```
{
  "success": false,
  "code": "Undefined", 
  "message": "Internal Server Error"
}

```