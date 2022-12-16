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
| lines | [Object]	 | 	List of text lines. The maximum number of lines returned is 300 per page. The lines are sorted top to bottom, left to right, although in certain cases proximity is treated with higher priority. As the sorting order depends on the detected text, it may change across images and OCR version updates. Thus, business logic should be built upon the actual line location instead of order. |
| words | [Object]	 | List of words in the text line. |
| boundingBox | [Number]	 | Quadrangle bounding box of a line or word, depending on the parent object, specified as a list of 8 numbers. The coordinates are specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. |
| text | String	 | The text content of a line or word. |
| confidence | Number	 | Confidence value between 0 and 1 inclusive. |
| width | Number	 | The width of the image/PDF in pixels/inches, respectively. |
| height | Number	 | 	The height of the image/PDF in pixels/inches, respectively. |
| angle | Number	 | The general orientation of the text in clockwise direction, measured in degrees between (-180, 180]. |
| page | Integer	 | The 1-based page number in the input document. |
| unit | String	 | The unit used by the width, height and boundingBox properties. For images, the unit is "pixel". For PDF, the unit is "inch". |
| language | String	 | The input language of the overall document. |
#

## Example - SWAGGER 
Swagger playground for TextScanner API is available on below url:
```
http://142.93.56.167:3000/docs
```
#
https://user-images.githubusercontent.com/71330830/117339945-57f14f80-ae6e-11eb-9ad5-916ad2797443.mp4


#
## Example - Postman


https://user-images.githubusercontent.com/71330830/117339972-5f185d80-ae6e-11eb-8313-7dc93090243a.mp4

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