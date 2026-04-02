const questionPool = [
    {
        "id": 231,
        "question": "You are building an app that will extract data from legal documents. You plan to use the Azure Document Intelligence in Foundry Tools prebuilt-read model. Which three document formats does the prebuilt-read model support? Each correct answer presents a complete solution.",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/extract-data-from-forms-with-form-recognizer/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "JSON",
                "explanation": "JSON is an unsupported format for the prebuilt-read model of Azure Document Intelligence.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Microsoft Excel",
                "explanation": "The prebuilt-read model supports common business formats including Microsoft Excel.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Microsoft Word",
                "explanation": "The prebuilt-read model natively supports Microsoft Word documents for text extraction.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "PDF",
                "explanation": "PDF is a primary supported format for the Azure Document Intelligence prebuilt-read model.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "TXT",
                "explanation": "TXT files are unsupported by this specific prebuilt model in Document Intelligence.",
                "source": "Sample Test"
            },
            {
                "id": 6,
                "correct": false,
                "answer": "XML",
                "explanation": "XML is not a supported input format for the prebuilt-read OCR model.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 232,
        "question": "Your organization processes invoices from vendors in various formats. You need to implement Azure Document Intelligence to extract key fields such as invoice number, due date, and total amount. Which two actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/document-intelligence-invoice-model/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Create a custom model for invoice processing.",
                "explanation": "Creating a custom model is unnecessary because the prebuilt invoice model already meets the requirements, saving time and effort.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Install the solution on a local server.",
                "explanation": "The service is cloud-based and does not require local installation to function.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Label all invoice documents manually.",
                "explanation": "The prebuilt model leverages pre-trained capabilities, eliminating the need for manual labeling.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Provision an Azure Document Intelligence in Foundry Tools resource.",
                "explanation": "Provisioning the resource is the necessary first step to enable the service\'s capabilities in your subscription.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "Edit the invoices to ensure consistency.",
                "explanation": "Editing incoming invoices is impractical and doesn\'t provide the model with the varied training data it needs to be robust.",
                "source": "Sample Test"
            },
            {
                "id": 6,
                "correct": true,
                "answer": "Use the prebuilt invoice model to extract key fields.",
                "explanation": "The prebuilt invoice model is specifically designed to extract standard fields like invoice number and total amount efficiently.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 233,
        "question": "An organization needs to automate invoice data extraction and integration to reduce errors. Which two actions should you take using Microsoft Azure Document Intelligence?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Integrate the extracted data with an organization\'s database.",
                "explanation": "Integrating the data ensures information is stored and used effectively within existing systems to support downstream workflows.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Train a custom model for document processing.",
                "explanation": "A custom model is unnecessary as the prebuilt Invoice model already meets standard invoice processing requirements.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use a general-purpose model for text extraction.",
                "explanation": "General-purpose models lack the specificity required to extract structured fields like invoice totals and dates.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Use the prebuilt Invoice model for data extraction.",
                "explanation": "The prebuilt Invoice model is optimized to handle invoice documents and extract structured key-value pairs and tables.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 234,
        "question": "Your organization scans various document types (invoices, receipts, custom forms) in PDF format. You need to extract structured information. Which two actions should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Convert the documents into plain text.",
                "explanation": "Converting to plain text results in the loss of structural information, which is essential for extracting meaningful data.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Train a custom model using labeled datasets in Azure Document Intelligence.",
                "explanation": "Training a custom model enables accurate extraction of data from unique forms that do not conform to standard prebuilt templates.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use the General Document model.",
                "explanation": "The General Document model is deprecated and not recommended for new solutions.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use the Layout model for semantic fields.",
                "explanation": "The Layout model extracts text and structure but is not semantically optimized for specific fields like invoice numbers compared to the specialized models.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": true,
                "answer": "Use the prebuilt Invoice model.",
                "explanation": "The prebuilt Invoice model is specifically designed to extract key information from invoices, making it appropriate for that specific document type.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 235,
        "question": "You need the Azure Vision service to identify the location of several objects in an image and return their coordinates. Which feature should you use?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Detect brands",
                "explanation": "Detect brands identifies brand logos specifically, rather than providing coordinates for general objects.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "image tagging",
                "explanation": "Image tagging returns descriptive labels and confidence scores but does not include spatial coordinates or bounding boxes.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "object detection",
                "explanation": "Object detection identifies individual objects within an image and returns their bounding box coordinates.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "recognize domain-specific content",
                "explanation": "This feature is intended for specialized scenarios and is deprecated.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 236,
        "question": "You have trained a custom vision model with satisfactory performance metrics. What should you do next to make the model available for predictions in a production environment?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Create a new Azure resource for the model.",
                "explanation": "Creating a new resource is unrelated to the step of deploying a model that is already trained.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Export the model for local use.",
                "explanation": "Exporting is for edge scenarios, not for standard production API access.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Publish the model and retrieve its Prediction URL and key.",
                "explanation": "Publishing the trained iteration is the required step to expose the model via the Prediction API.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Re-train the model with additional data.",
                "explanation": "Re-training is unnecessary if performance metrics are already satisfactory.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 237,
        "question": "You are developing a custom vision model to detect objects. You need to ensure the trained model meets required accuracy. What action should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/test-retrain-custom-vision-model/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Deploy the model without testing.",
                "explanation": "Bypassing testing is high-risk and prevents assessment of the model\'s reliability.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Evaluate precision and recall metrics.",
                "explanation": "Precision and recall are the standard metrics for assessing the accuracy and identification capability of an object detection model.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Source new images for testing.",
                "explanation": "While helpful, evaluating existing metrics is the primary way to assess the current trained model.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Retrain the model with a new dataset.",
                "explanation": "Retraining is an improvement step, not an assessment step.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 238,
        "question": "You need to efficiently improve a plant classification model\'s accuracy by optimizing the labeling process for remaining untagged images. Which three actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-azure-document-intelligence-studio/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Delete all previously tagged images.",
                "explanation": "Deleting tagged images would lose valuable training data.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Manually label all images from scratch.",
                "explanation": "Manual labeling is inefficient when automation tools like Smart Labeler are available.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Prioritize reviewing tags with high prediction uncertainty.",
                "explanation": "Focusing on ambiguous cases (high uncertainty) allows you to resolve the most significant errors in the model.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Review and confirm suggested tags for each image.",
                "explanation": "Reviewing suggestions ensures the data reliability while speeding up the process.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "Train the model without reviewing tags.",
                "explanation": "Training without review can propagate errors from the automated labeler.",
                "source": "Sample Test"
            },
            {
                "id": 6,
                "correct": true,
                "answer": "Use Smart Labeler to suggest tags for untagged images.",
                "explanation": "Smart Labeler uses the current model to predict tags, significantly reducing manual effort.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 239,
        "question": "You are building an app for an edge device to analyze fruits using Custom Vision without internet connectivity. Which model domain should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/classify-images/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Compact domain",
                "explanation": "Only compact domains generate models that are optimized for export and real-time execution on mobile and edge devices.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Food domain",
                "explanation": "The standard Food domain is optimized for cloud-based high accuracy and cannot be exported for offline use.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "General domain",
                "explanation": "Standard general domains are designed for cloud compute, not for offline edge constraints.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 240,
        "question": "You need to extract keyframes from uploaded video and store them on a disk using the Azure AI Video Indexer API. How should you implement the solution?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Upload the video and download the ZIP file of the thumbnails.",
                "explanation": "This describes the manual portal workflow, not the programmatic API implementation for disk storage.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Upload the video, get the video index, and get the thumbnail for each keyframe.",
                "explanation": "This is the correct API sequence: upload, retrieve the index metadata to identify keyframes, then fetch the specific thumbnails.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use SSML to generate keyframes.",
                "explanation": "SSML is for speech synthesis, not video analysis.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 241,
        "question": "You are using the Video Indexer API to analyze Teams recordings for mentions of competing companies. Which content model should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "custom brands",
                "explanation": "The Custom Brands model is specifically designed to detect company names and logos in speech and visuals.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "custom Language",
                "explanation": "Custom Language models add unrecognized terminology to transcription but don\'t track competitor brand mentions specifically.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "custom slate",
                "explanation": "Slate detection is used for production markers like clapper boards.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 242,
        "question": "You need to configure Video Indexer API calls to enable multilingual identification in multi-language videos. Which value should you set for the sourceLanguage parameter?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "language detection",
                "explanation": "Simple language detection typically identifies only a single dominant language.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "multi detection",
                "explanation": "This is not a valid parameter value for the Video Indexer API.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "multi-language detection",
                "explanation": "Setting sourceLanguage to \'multi-language detection\' allows the indexer to transcribe multiple languages within the same file.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "multi-lingual detection",
                "explanation": "This value is technically incorrect for the API parameter schema.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 243,
        "question": "You build an app that enables users to upload scans of invoices. You need to extract text and key/value pairs. Which service should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Search",
                "explanation": "AI Search is for exploration and retrieval at scale, not for structural extraction from invoices.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure Document Intelligence in Foundry Tools",
                "explanation": "Azure Document Intelligence (formerly Form Recognizer) is specifically designed to extract text and structured data from business forms.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure AI Immersive Reader",
                "explanation": "Immersive Reader is for accessibility and reading comprehension.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure AI Metrics Advisor",
                "explanation": "Metrics Advisor monitors time-series data for anomalies.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 244,
        "question": "Your company plans to develop an app with an AI model using proprietary data. You need to select an Azure platform to ensure the model is connected and operationalized effectively. Which Azure service should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Content Understanding",
                "explanation": "This service focuses on multimodal content analysis rather than overall model operationalization.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Microsoft Foundry",
                "explanation": "Microsoft Foundry provides specialized tools to deploy, connect data, and manage AI model lifecycles effectively.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure Speech",
                "explanation": "Azure Speech is restricted to audio-related tasks.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Vision",
                "explanation": "Azure Vision is tailored for specific prebuilt visual tasks.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 245,
        "question": "You are building an Azure Language solution that must be deployed to a location without internet connectivity. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Deploy the solution to a Docker host container.",
                "explanation": "Disconnected Docker containers allow hosting AI capabilities like Language Understanding on-premises without cloud connectivity.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Download the model and deploy it to a virtual machine.",
                "explanation": "Language models cannot be simply downloaded and run on a VM without the container infrastructure.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use a Microsoft Foundry standard instance.",
                "explanation": "Standard instances require persistent internet access as they run in the Azure cloud.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 246,
        "question": "You have a Microsoft Foundry service. You need to deploy a foundation model that can generate content, summarize, understand images, perform semantic search, and generate code. Which model provider should you use?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Cohere",
                "explanation": "Cohere models typically focus on RAG and summarization rather than full multimodal image understanding.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Meta",
                "explanation": "Meta models focus on text generation but don\'t have the same level of integrated multimodal support in Foundry as OpenAI.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "OpenAI",
                "explanation": "OpenAI models (like GPT-4o) available in Foundry support all these capabilities natively, including image understanding and code generation.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Mistral",
                "explanation": "Mistral lacks the full integrated multimodal and code features required for this wide scope of tasks in Foundry.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 247,
        "question": "You need to identify the endpoint for a Microsoft Foundry Service resource using the Azure CLI. Which command should you run?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "az cognitiveservices account show",
                "explanation": "This command fails because it lacks the necessary identifiers.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "az cognitiveservices account show --name myresource",
                "explanation": "This is missing the required resource-group parameter.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "az cognitiveservices account show --name myresource --resource-group cognitive-services-resource-group",
                "explanation": "Providing both name and resource group is the correct way to retrieve account details including the endpoint.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 248,
        "question": "You enable firewall rules for your Azure AI Services account. You need to ensure a Custom Vision app deployed on an Azure VM can access the service. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/secure-azure-ai-services/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Assign an RBAC role.",
                "explanation": "RBAC handles identity but does not resolve network-level firewall restrictions.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Grant access to a specific virtual network.",
                "explanation": "Since the VM resides in a VNET, granting that network access is the correct way to allow traffic through the firewall.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Grant access to an internet IP range.",
                "explanation": "Internal VM traffic should be handled via VNET rules, not public IP ranges.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 249,
        "question": "While developing a containerized OCR application, you retrieve a status message of \'Mismatch\'. What should you do to ensure the solution connects?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Confirm that the API key is for the correct region.",
                "explanation": "While region matters, the mismatch error specifically indicates a resource type conflict.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Confirm that the API key is for the correct resource type.",
                "explanation": "Mismatch status indicates you are likely using a key from a different kind of service resource than the one the container expects.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Upgrade the resource to a higher tier.",
                "explanation": "Tier limits don\'t cause resource type mismatch errors.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 250,
        "question": "You implement a Microsoft Foundry Content Safety solution, but some valid images fail to display. What should you do to ensure proper flags?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Adjust the content categories.",
                "explanation": "Categories define what to look for, but not the threshold for blocking.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Adjust the severity level.",
                "explanation": "Modifying severity levels for blocking allows you to balance safety with system usability based on feedback.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Convert images to a different format.",
                "explanation": "Safety analysis is format-independent for standard image types.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 251,
        "question": "You plan to build an AI solution to detect harmful content in company documents. Which service should you include?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Search",
                "explanation": "AI Search is for indexing, not automated safety flagging.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Content Safety",
                "explanation": "Content Safety automatically flags harmful content in text/images across categories like hate and self-harm.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Document Intelligence",
                "explanation": "Document Intelligence focuses on data extraction, not safety evaluation.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 252,
        "question": "You need to ensure generated educational content complies with standards and avoids inappropriate material. What should you implement?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/content-safety-overview/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Enable Azure Translator.",
                "explanation": "Translator provides multilingual support but does not block inappropriate content.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Implement Microsoft Foundry Content Safety.",
                "explanation": "Azure Content Safety is specifically built to detect and block harmful content, ensuring educational materials are safe.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use Azure Language in Foundry Tools.",
                "explanation": "General text analytics evaluates sentiment but lacks dedicated safety filtering capabilities.",
                "source": "Sample Test"
            }
        ]
    }
]