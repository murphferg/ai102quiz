const questionPool = [
    {
        "id": 253,
        "question": "You are building a mobile app that will enable users to scan street signs and will read out the text on the sign. You need to recommend a service to use that minimizes development effort. Which service should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-ocr",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Azure Vision in Foundry Tools",
                "explanation": "Azure Vision in Foundry Tools is the only service listed that provides the OCR capabilities necessary to read text from images like street signs.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure AI Custom Vision",
                "explanation": "Azure AI Custom Vision is used for image classification and object detection, but it does not offer OCR functionality.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure Face in Foundry Tools service",
                "explanation": "The Face service is specialized for facial detection and recognition, not for reading text on signs.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Document Intelligence in Foundry Tools",
                "explanation": "While this service has OCR, it is optimized for structured documents and forms rather than general images of street signs.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 254,
        "question": "You are provisioning an Azure OpenAI in Foundry Models service resource. You need to ensure that the resource is only available to applications that are hosted in your Azure subscription. Which network security setting should you configure?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "All networks",
                "explanation": "This setting permits access from any network, including the public internet, which violates the requirement for restricted access.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "All networks, and a network security group to control traffic",
                "explanation": "While NSGs control traffic, leaving the service open to \'All networks\' is not the most secure way to restrict access to internal applications.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Disabled, and allow a private endpoint connection to establish access",
                "explanation": "Setting network access to \'Disabled\' and using a private endpoint ensures that the resource is only accessible via a private IP within your Azure infrastructure.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Selected networks",
                "explanation": "Selected networks usually allows access from specific public IP ranges or virtual networks, but \'Disabled\' with a private endpoint is the stricter requirement for subscription-only access.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 255,
        "question": "You are building a custom agent based on Azure OpenAI and need to prevent User Prompt Injection Attacks (UPIA) or jailbreaking. Which Microsoft Foundry Service should you include in the solution?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Content Safety",
                "explanation": "Content Safety includes jailbreak risk detection designed to recognize attempts to bypass system rules, role-play attacks, and encoding attacks.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Face",
                "explanation": "The Face service is for biometric analysis and cannot detect text-based prompt injection attacks.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Language",
                "explanation": "While it handles NLP, the specific specialized models for jailbreak and harm detection are part of the Content Safety service.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Vision",
                "explanation": "Vision is for image and video analysis and is unrelated to preventing LLM jailbreaking.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 256,
        "question": "Your organization is implementing Microsoft Foundry Content Safety to moderate text content. You need to identify and restrict harmful content while allowing customization for specific patterns. Which two actions should you take?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Configure harmful patterns using the Custom Categories API.",
                "explanation": "This API allows for tailored moderation by defining specific patterns that align with organizational needs.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Enable built-in blocklists in Content Safety Studio.",
                "explanation": "Built-in blocklists provide predefined terms to effectively flag common harmful content such as profanities and hate speech.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Enable encryption at rest with customer-managed keys.",
                "explanation": "Encryption enhances data security but does not contribute to the active detection or restriction of harmful content.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use the Analyze Image API for text analysis.",
                "explanation": "The Analyze Image API focuses on image moderation and is not applicable to the task of moderating text content.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 257,
        "question": "You are building an app that will flag documents containing the names of staff members using the PII detection feature. Which category should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/concepts/entity-categories",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Age",
                "explanation": "The Age category detects ages of people, not their names.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "DateTime",
                "explanation": "This category detects date and time values.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Person",
                "explanation": "The Person category is specifically used to detect the names of people in the PII detection feature.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "PhoneNumber",
                "explanation": "This category detects telephone numbers, not names.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 258,
        "question": "You are building an app that will analyze meeting recordings and identify who is speaking at which moment. Which type of voice profile should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speaker-recognition-overview",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Speaker identification",
                "explanation": "Speaker identification determines an unknown speaker\'s identity within a group of enrolled speakers, which is necessary to attribute speech in a meeting.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "text-dependent verification",
                "explanation": "This requires speakers to use a specific passphrase, which is not suitable for natural conversation in a meeting recording.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "text-independent verification",
                "explanation": "Verification is a 1:1 check to confirm a claimed identity, not a 1:N process to identify which person in a group is currently speaking.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 259,
        "question": "You are building an app to recognize intent and entities in real-time. When should you choose simple pattern matching over services like Azure Language?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-recognize-intents-from-speech-csharp",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "You are only interested in matching strictly what the user said.",
                "explanation": "Pattern matching is ideal when you want to match exact, literal phrases without the variability of machine learning interpretation.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "You must manage the model by using a web app.",
                "explanation": "Model management via web apps is a characteristic of Azure AI services, not simple pattern matching.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "You must use a machine learned entity.",
                "explanation": "Machine learned entities require the Azure Language service, not simple pattern matching.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "You must use a prebuilt entity.",
                "explanation": "Prebuilt entities are a feature of Azure AI Language, not pattern matching.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 260,
        "question": "You have a custom question answering project. A customer asks a question not in the project, but you do not see any active learning suggestions. What should you do to see suggestions with minimal effort?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/question-answering/how-to/improve-knowledge-base",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Add the customer questions to the editor manually.",
                "explanation": "This involves high administrative effort and does not utilize the active learning feature.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Configure active learning.",
                "explanation": "Active learning is usually enabled by default; the lack of suggestions is likely due to the processing delay.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Enable logging for the project.",
                "explanation": "Logging documents activity but does not directly force the generation of active learning suggestions.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Wait at least 30 minutes before checking for suggestions.",
                "explanation": "Active learning suggestions are not processed in real-time. There is an approximate 30-minute delay to balance service performance.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 261,
        "question": "You receive an error when adding synonyms to a question answering solution. The synonym list includes \'fix problems\', \'troubleshoot\', and \'#diagnostic\'. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/question-answering/how-to/query-knowledge-base-with-synonyms",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Modify the order of the synonyms.",
                "explanation": "The order of synonyms has no impact on computational logic or API success.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Remove any question and answer pairs from the call.",
                "explanation": "Synonyms can only be added to a project that already has at least one question and answer pair.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Remove any special characters from the call.",
                "explanation": "Special characters like \'#\' are not allowed in synonym definitions and will cause API errors.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 262,
        "question": "You are building an Azure AI Search solution and need to include a custom web app named App1 as a custom skill. Which @odata.type should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/search/cognitive-search-custom-skill-interface",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Microsoft.Skills.Custom.AmlSkill",
                "explanation": "This type is used specifically for calling an Azure Machine Learning model, not a general web API.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Microsoft.Skills.Custom.WebApiSkill",
                "explanation": "This type allows you to extend the AI enrichment pipeline by making an HTTP call to a custom web API.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Microsoft.Skills.Text.CustomEntityLookupSkill",
                "explanation": "This is a built-in skill for looking up entities from a definition you provide, not for calling external apps.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Microsoft.Skills.Util.ConditionalSkill",
                "explanation": "This is a utility skill used for branching logic within a skillset.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 263,
        "question": "Which three prebuilt models are available in Azure Document Intelligence? Each correct answer presents a complete solution.",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/4-financial-id-tax-models",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "invoice",
                "explanation": "Invoice is a standard prebuilt model in Azure Document Intelligence.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "meeting minutes",
                "explanation": "Meeting minutes must be added as a custom model; it is not a prebuilt option.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "receipt",
                "explanation": "Receipt is a standard prebuilt model used to extract data from sales receipts.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "time sheets",
                "explanation": "Time sheets require a custom model training process.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": true,
                "answer": "W-2",
                "explanation": "The W-2 tax form is supported by a prebuilt model in Azure Document Intelligence.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 264,
        "question": "Your organization must automate structured data extraction from sensitive contracts and invoices while complying with privacy regulations. Which two actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-general-document-read-layout-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Configure an Azure AI Search resource.",
                "explanation": "Azure AI Search is for indexing/retrieval and is not required for the extraction task itself.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Manually preprocess documents to remove sensitive information.",
                "explanation": "This is unnecessary as the service can handle sensitive data securely and automatically through features like PII detection if needed.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Upload documents to Azure Blob Storage.",
                "explanation": "Storing documents in Blob Storage ensures they are accessible and secure for the automated processing pipeline.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use the General Document model.",
                "explanation": "The General Document model is deprecated and no longer recommended for new extraction solutions.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": true,
                "answer": "Use the Layout model.",
                "explanation": "The Layout model is designed to extract key-value pairs and entities from structured and semi-structured documents.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 265,
        "question": "You need a solution to extract information from documents, images, videos, and audio while minimizing development effort. What should you use?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Azure Content Understanding in Foundry Tools",
                "explanation": "This is a multimodal service designed to extract information from a wide range of content types through a single service and unified APIs.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Document Intelligence in Foundry Tools",
                "explanation": "This service is primarily limited to document-centric scenarios and doesn\'t natively handle video/audio content in the same unified way.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure Language in Foundry Tools",
                "explanation": "Azure Language focuses only on text analysis, not on images or video content.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Machine Learning",
                "explanation": "Azure Machine Learning requires significant custom development and training effort compared to using the unified Content Understanding service.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 266,
        "question": "You are identifying and extracting key fields from scanned invoices. Which three actions should you take for optimal performance? Each correct answer presents part of the solution.",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Ensure input files meet required specifications.",
                "explanation": "Meeting file format and resolution requirements is essential for high-quality data extraction performance.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Select the Invoice model.",
                "explanation": "The Invoice model is specifically trained to recognize fields like invoice numbers and totals.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use low-quality images.",
                "explanation": "Low-resolution images significantly reduce the accuracy of OCR and data extraction.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Use text-based PDF files.",
                "explanation": "Text-embedded PDFs eliminate errors in character recognition, optimizing the structured data extraction process.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "Select the Business Card model.",
                "explanation": "This model is tailored for contact info, not for the complex tables and fields found in invoices.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 267,
        "question": "You need to extract tables from document photos (JPEG, PNG, TIFF) using the Layout model in Azure Document Intelligence without model training. Which three methods can you use? Each correct answer presents a complete solution.",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept-layout",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "a client library SDK",
                "explanation": "SDKs allow you to programmatically call the prebuilt-layout model to extract data.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "a prebuilt model",
                "explanation": "A prebuilt model is the component being used, but it is not the *method* of access or extraction itself.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "a REST API",
                "explanation": "The REST API allows programmatic extraction by sending a POST request to the service endpoint.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "the Document Intelligence Studio",
                "explanation": "The Studio provides a no-code graphical interface to run the layout model interactively.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 268,
        "question": "Which three prompt engineering strategies should you consider while testing a GPT-based chat application following Microsoft best practices? Each correct answer presents a complete solution.",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Be Descriptive",
                "explanation": "Using descriptive language and analogies helps the model better understand the context of the request.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Be minimalistic",
                "explanation": "Being too brief can lead to vague or incorrect interpretations by the model.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Be Specific",
                "explanation": "Specific instructions leave less room for interpretation, leading to more accurate outputs.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Order Matters",
                "explanation": "The sequence in which information is presented to the model significantly affects its reasoning and final output.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "Be simple",
                "explanation": "Simple prompts may lack the necessary complexity to guide the model toward expert-level or nuanced results.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 269,
        "question": "You need to configure an Azure OpenAI application to retrieve relevant data efficiently from a large dataset. What action should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/azure-openai-on-your-data/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Deploy a GPT-4 model.",
                "explanation": "Deploying a model provides generation capability but does not inherently improve retrieval efficiency of large datasets.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Enable vector search.",
                "explanation": "Vector search uses semantic embeddings to find high-relevance data much more efficiently than standard keyword searches.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Increase chunk size.",
                "explanation": "Increasing chunk size affects how data is processed but can actually decrease retrieval precision.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use keyword-based search.",
                "explanation": "Keyword search lacks the semantic understanding required for efficient high-relevance retrieval in large, complex datasets.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 270,
        "question": "When requesting image generation from the DALL-E 3 Azure OpenAI API, which property is required in the HTTP request body?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#image-generation",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "the API version",
                "explanation": "The API version is specified as a query parameter in the URL or header, not in the body.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "the Azure OpenAI resource name",
                "explanation": "The resource name is used in the request URL.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "the deployment ID",
                "explanation": "The deployment name/ID is part of the request URL.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "the prompt",
                "explanation": "The prompt (the description of the image) is the mandatory property for the JSON body of the request.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 271,
        "question": "In a REST call to a DALL-E model for image generation, what does the \'size\' parameter indicate?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-azure-openai-rest-api-to-consume-dall-e-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "the number of responses returned",
                "explanation": "The \'n\' parameter controls the number of generated images.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "the size of the images in bytes",
                "explanation": "Size does not refer to file size in bytes.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "the size of the images in pixel resolution",
                "explanation": "The size parameter specifies the resolution (e.g., 1024x1024) of the generated image.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "the number of kilobytes in the image",
                "explanation": "The parameter is used for dimensions, not data weight.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 272,
        "question": "You need to optimize an app using the Azure Face service for images that contain blurry faces. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/face/concepts/face-detection",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Change the recognition model to recognition_02.",
                "explanation": "Recognition models are for matching identity; they don\'t solve the initial problem of detecting a blurry face.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Decrease the faceIdTimeToLive value.",
                "explanation": "This value controls how long the session ID lasts and has no effect on image processing quality.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Set the detection model to detection_03.",
                "explanation": "The detection_03 model is specifically designed to improve accuracy on small, side-view, and blurry faces.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 273,
        "question": "Which Azure Vision feature should you use to extract text from scanned images of handwritten notes?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-ocr",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Custom Vision",
                "explanation": "Custom Vision is for object detection and classification, not text extraction.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Image Analysis",
                "explanation": "Image Analysis provides descriptive tags and captions but does not extract raw text from handwriting.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "optical character recognition (OCR)",
                "explanation": "OCR is the primary visual feature designed specifically to identify and extract text from images, including handwriting.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Spatial Analysis",
                "explanation": "Spatial Analysis is for tracking people\'s movements in physical space.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 274,
        "question": "You are building an app to detect the presence of people in a video feed. Which Azure Vision feature should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "face detection",
                "explanation": "Face detection finds faces, but it is not optimized for broader person presence/movement tracking in a video feed.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Image Analysis",
                "explanation": "Image analysis is better suited for static images rather than analyzing presence within a live or recorded video feed.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "optical character recognition (OCR)",
                "explanation": "OCR is for reading text.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Spatial Analysis",
                "explanation": "Spatial Analysis is the specific feature designed to analyze the presence and movement of people within physical environments via video.",
                "source": "Sample Test"
            }
        ]
    }
]