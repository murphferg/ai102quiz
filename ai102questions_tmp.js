const questionPool = [
    {
        "id": 207,
        "question": "Your organization is developing an AI agent for customer support inquiries that must integrate with Azure resources. You need to select a framework that supports AI orchestration and multi-agent workflows. What should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/2-plan-azure-ai-services",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Bot Framework",
                "explanation": "Azure Bot Framework is commonly used for building conversational bots but does not provide the specific orchestration features required for complex multi-agent workflows.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Machine Learning Studio",
                "explanation": "Azure Machine Learning Studio is focused on developing and managing machine learning models, not on the orchestration of multi-agent conversational workflows.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Cognitive Services API",
                "explanation": "Cognitive Services offer specific AI capabilities like vision or speech but do not inherently provide a framework for orchestrating interactions between multiple agents.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Semantic Kernel framework",
                "explanation": "Semantic Kernel is designed specifically to support generative AI orchestration and multi-agent workflows, making it the most suitable choice for this requirement.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 208,
        "question": "Your organization is developing an AI agent to assist with document retrieval and analysis using Microsoft Azure services. You need to enable the AI agent to access external data sources for processing documents. What should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Configure a custom model in Azure Machine Learning.",
                "explanation": "This focuses on custom model analysis but does not address the retrieval of documents from external sources.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Enable default capabilities in Azure Document Intelligence in Foundry Tools.",
                "explanation": "Document Intelligence is for extracting data from documents, not for the retrieval orchestration from external sources.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use Azure Vision in Foundry Tools Service.",
                "explanation": "Azure Vision is primarily for image analysis and OCR, lacking the retrieval and indexing logic needed for document analysis at scale.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Use Azure AI Search with built-in skills.",
                "explanation": "Azure AI Search is the correct choice because it provides indexing and built-in skills to access and analyze external documents efficiently.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 209,
        "question": "Your organization plans to develop an AI solution using Microsoft Foundry Agent Service to automate customer support workflows. You need to configure the agent to interact with external data sources and execute actions based on user queries. Which two actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Add Bing search tools in the agent configuration.",
                "explanation": "Adding Bing search tools allows the agent to retrieve relevant, real-time information from external sources.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Configure Azure Functions in the agent configuration file.",
                "explanation": "Configuring Azure Functions allows the agent to programmatically execute specific actions or business logic based on the user's input.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Deploy a containerized image.",
                "explanation": "Deploying a containerized image is a deployment method, not a configuration step for agent interaction logic.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Set up a SQL database.",
                "explanation": "While a database might store data, it is not a direct tool used by the Agent Service to execute actions based on queries without an intermediary like a Function.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 210,
        "question": "You have an Azure OpenAI solution using a GPT-3.5-Turbo model with auto-update disabled. Later, you discover it uses a newer version. Why was the version updated?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Auto-update is always enabled.",
                "explanation": "Auto-update can be disabled to allow manual control over versioning.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Auto-update is enabled automatically when a new version is released.",
                "explanation": "If auto-update is explicitly disabled, new releases do not trigger an update until action is taken or retirement occurs.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Model versions are updated automatically after five updates.",
                "explanation": "Azure OpenAI does not have a rule based on the count of version updates; it is based on the model's specific lifecycle.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "The model version reached its retirement date.",
                "explanation": "Even if auto-update is disabled, once a model version reaches its retirement date, it is automatically upgraded to the default version.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 211,
        "question": "An organization plans to use Azure OpenAI to generate visual content from text descriptions. What should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/3-azure-ai-services",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Search",
                "explanation": "Azure AI Search is for information retrieval and indexing, not for generating images.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "DALL-E",
                "explanation": "DALL-E is the specific foundation model designed to create visual content (images) from natural language text descriptions.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "GPT-4",
                "explanation": "GPT-4 is a text-based foundation model optimized for natural language tasks, not image generation.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Text Embedding Models",
                "explanation": "Embedding models convert text into numerical vectors for search and similarity tasks, not for creating images.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 212,
        "question": "Your company is developing a chatbot to provide answers based on the company's internal knowledge base. You need to improve retrieval and processing. Which two actions should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/3-azure-ai-services",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Index the knowledge base with AI Search.",
                "explanation": "Indexing with AI Search allows for efficient retrieval of relevant information chunks from the internal knowledge base.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Integrate the Embeddings API.",
                "explanation": "The Embeddings API allows for semantic processing of queries, improving the matching of user intent to the retrieved data.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Train a custom language model.",
                "explanation": "Training a custom model from scratch is unnecessary and expensive when pre-trained models like GPT-4 are optimized for RAG tasks.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use AI Vision for document analysis.",
                "explanation": "AI Vision is for image analysis; while it can perform OCR, it is not the tool for processing an internal knowledge base for conversational retrieval.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 213,
        "question": "You are building a web app using DALL-E 3 to generate images. Which three HTTP header properties should you include in the API requests?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/reference",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "the API version used in this operation",
                "explanation": "The api-version is a required parameter for requests made to the Azure OpenAI REST API.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "the name of the Azure OpenAI service resource",
                "explanation": "The resource name is used in the URL and authentication to identify the specific service instance.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "the name of the DALL-E 3 model deployment",
                "explanation": "The deployment name identifies which specific model instance you are targeting for the request.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "the quality of the generated images",
                "explanation": "Image quality settings are provided in the HTTP request body, not as a property in the HTTP header.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 214,
        "question": "Your organization wants a generative AI solution to summarize customer complaints accurately while reducing costs. What action should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Apply prompt engineering without external data sources.",
                "explanation": "While this improves response structure, it does not provide the domain-specific grounding needed for accurate summaries of proprietary data.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Deploy a model without grounding data and rely on pre-trained capabilities.",
                "explanation": "Relying purely on pre-trained data often results in less accurate summaries and increases the risk of hallucinations.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Fine-tune a model using customer query data without an orchestration layer.",
                "explanation": "Fine-tuning is expensive to maintain and perform, and fails to dynamically integrate real-time contextual data.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Use Retrieval-Augmented Generation (RAG) with Azure AI Search for grounding data.",
                "explanation": "RAG with AI Search ensures the model is grounded in domain-specific data, providing accurate summaries cost-effectively without retraining the whole model.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 215,
        "question": "You need to ensure that generated code snippets from Azure OpenAI adhere to your organization's coding standards. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Enable multi-region deployment.",
                "explanation": "Multi-region deployment increases resilience but does not affect the style or quality of the code generated.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Increase compute resources.",
                "explanation": "Increasing resources may improve speed but does not influence the content or standards-compliance of the output.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Provide standard-compliant examples in prompts.",
                "explanation": "Providing examples (few-shot prompting) is the most effective way to guide the model to generate output that follows specific standards.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Switch to a chat-optimized model.",
                "explanation": "A chat-optimized model provides better dialogue but doesn't automatically know your specific organizational coding standards.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 216,
        "question": "You are summarizing customer feedback with Azure OpenAI. You need to optimize performance and ensure responses align with the organization's tone. Which three actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/fine-tune-model-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Fine-tune the model with customer feedback data.",
                "explanation": "Fine-tuning allows the model to learn specific organizational styles and tones that are difficult to capture through prompting alone.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Set up monitoring in Azure to track response accuracy and resource usage.",
                "explanation": "Monitoring is required to continuously evaluate performance and ensure the solution remains optimized.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Use prompt engineering to refine the model's output.",
                "explanation": "Prompt engineering helps refine the model's output quality by effectively structuring instructions.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Deploy the model on edge devices.",
                "explanation": "Edge deployment handles connectivity and latency but does not address performance optimization or tone alignment.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 217,
        "question": "You need to reduce the randomness of a text-generation model's output to make responses more predictable. Which parameter should you configure?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "max_tokens",
                "explanation": "Max_tokens limits the length of the response but does not affect its randomness.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "role",
                "explanation": "The role parameter defines the author of the message (System, User, Assistant), not the randomness of the model.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "stop",
                "explanation": "Stop sequences indicate when the model should halt generation, not how varied the generation is.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "temperature",
                "explanation": "Temperature directly controls the randomness of the model. Lowering it makes output more deterministic and consistent.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 220,
        "question": "Your sentiment analysis app is flagging customer feedback as negative even when it contains positive comments. You need more granular analysis. What should you add to the API request?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "loggingOptOut=true",
                "explanation": "This parameter is for privacy and opts out of logging your data for model improvement; it doesn't affect analysis granularity.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "StringIndexType=TextElements_v8",
                "explanation": "This parameter affects how offsets and lengths are calculated in the response, not the depth of sentiment analysis.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "opinionMining=true",
                "explanation": "Opinion mining adds aspect-based sentiment analysis, providing granular positive and negative scores for specific features within a sentence.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "languageDetection=true",
                "explanation": "Language detection identifies the language but doesn't provide more granular sentiment details.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 222,
        "question": "You are building a custom translation model and need a BLEU score that indicates high-quality translation. What is the minimum score range required?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "0 to 19",
                "explanation": "This range typically indicates low-quality or nonsensical translation.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "20 to 39",
                "explanation": "This range is considered fair but not high quality.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "40 to 59",
                "explanation": "A BLEU score between 40 and 60 is generally accepted as a high-quality, human-like translation.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "80 to 100",
                "explanation": "While exceptionally high, this often indicates overfitting or that the test data is identical to training data, and is not the standard target for 'high quality'.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 223,
        "question": "A speech-to-text app has high Word Error Rate (WER) and many substitution errors. What should you add to the training data to improve the model?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "custom product and people names",
                "explanation": "Substitution errors occur when the model doesn't recognize specific terms; adding custom names helps the model correctly map those sounds to the right words.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "overlapping speakers",
                "explanation": "Overlapping speakers usually lead to deletion errors (missing words), not substitution errors.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "people talking in the background",
                "explanation": "Background noise leads to insertion errors (extra words), not substitution errors.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "standard dictionary words",
                "explanation": "Base models already know standard words; improvements for specific apps require specialized domain vocabulary.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 227,
        "question": "You are building a chat application grounded with company data using Azure OpenAI. Which four types of files are supported for the 'Using your data' feature?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "HTML, MD, PDF, TXT",
                "explanation": "Azure OpenAI's data grounding feature currently supports text-based formats including HTML, Markdown, PDF, and plain text.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "XML",
                "explanation": "XML is not currently supported for direct grounding in the 'Using your data' feature.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "ZIP",
                "explanation": "Compressed files like ZIP must be extracted before the service can index the content.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "EXE",
                "explanation": "Executable files are binary and cannot be indexed for natural language grounding.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 229,
        "question": "Your company needs to classify incoming documents into categories before extracting data fields. Which solution should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Vision OCR",
                "explanation": "OCR only recognizes text; it does not have the logic to classify documents into semantic categories.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Custom classification model in Azure Document Intelligence",
                "explanation": "The custom classification model is designed specifically to categorize documents into predefined classes to facilitate downstream extraction.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Custom template model in Azure Document Intelligence",
                "explanation": "Template models are for extracting data from a known fixed structure, not for the initial classification of a document type.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Invoice model in Azure Document Intelligence",
                "explanation": "This model is specialized for invoices but cannot classify a document as being a 'Medical Form' or 'Contract' first.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 230,
        "question": "Your company receives multi-page PDF documents from clients containing specifications and statements of work, often including tables and selection marks. You need to extract text, tables, and selection marks while maintaining the document's structure. What should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Vision in Foundry Tools OCR",
                "explanation": "Azure Vision in Foundry Tools OCR is limited to text extraction from images and does not support advanced features like table or selection mark recognition.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Document Intelligence general model",
                "explanation": "The general model supports entity extraction but does not focus on maintaining the document's structure compared to the layout model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Azure Document Intelligence layout model",
                "explanation": "Azure Document Intelligence layout model is the most appropriate solution because it is specifically designed to extract text, tables, and selection marks while preserving the document's structure, which is essential for processing multi-page PDF documents.",
                "source": "https://learn.microsoft.com/en-us/training/modules/extract-data-from-forms-with-form-recognizer/2-get-started-with-form-recognizer"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Document Intelligence read model",
                "explanation": "The read model is limited to extracting printed and handwritten text and does not include the advanced structural capabilities required for tables and selection marks.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            }
        ]
    },
    {
        "id": 231,
        "question": "You are building an app that will extract data from legal documents using the Azure Document Intelligence prebuilt-read model. Which three document formats does the prebuilt-read model support?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/extract-data-from-forms-with-form-recognizer/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "JSON, TXT, and XML",
                "explanation": "TXT, JSON, and XML are unsupported by the prebuilt-read model of Azure Document Intelligence.",
                "source": "https://learn.microsoft.com/en-us/training/modules/extract-data-from-forms-with-form-recognizer/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Microsoft Excel, Microsoft Word, and PDF",
                "explanation": "The prebuilt-read model specifically supports PDF, Microsoft Excel, and Microsoft Word files for OCR processing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/extract-data-from-forms-with-form-recognizer/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "ZIP, PNG, and HTML",
                "explanation": "While images like PNG are often supported by OCR, the prebuilt-read model documentation for Document Intelligence highlights Word, Excel, and PDF as the primary document formats.",
                "source": "https://learn.microsoft.com/en-us/training/modules/extract-data-from-forms-with-form-recognizer/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "CSV, XML, and JSON",
                "explanation": "These structured data formats are not the target for the prebuilt-read OCR model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/extract-data-from-forms-with-form-recognizer/"
            }
        ]
    },
    {
        "id": 232,
        "question": "Your organization needs to extract key fields such as invoice number, due date, and total amount from vendor invoices. Which two actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/document-intelligence-invoice-model/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Provision an Azure Document Intelligence resource and use the prebuilt invoice model.",
                "explanation": "Provisioning the resource enables the service, and the prebuilt invoice model is the most efficient approach for extracting standard fields without manual labeling.",
                "source": "https://learn.microsoft.com/en-us/training/modules/document-intelligence-invoice-model/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Create a custom model and label all documents manually.",
                "explanation": "Creating a custom model is unnecessary because the prebuilt invoice model already meets the requirements for standard invoices, saving time and effort.",
                "source": "https://learn.microsoft.com/en-us/training/modules/document-intelligence-invoice-model/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Install the solution on a local server.",
                "explanation": "Installing the solution on a local server is irrelevant because the service is cloud-based and does not require local installation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/document-intelligence-invoice-model/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Edit the invoices to ensure consistency.",
                "explanation": "Editing the invoices won't help when processing incoming documents and doesn't provide the model with varied training data.",
                "source": "https://learn.microsoft.com/en-us/training/modules/document-intelligence-invoice-model/"
            }
        ]
    },
    {
        "id": 233,
        "question": "An organization manually processes a high volume of invoices daily, leading to errors. You need to use Azure Document Intelligence to automate extraction and integration. Which two actions should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Use the prebuilt Invoice model and integrate the data with the database.",
                "explanation": "The prebuilt Invoice model is specifically designed to handle invoice documents efficiently, and integration ensures the data is stored effectively within existing systems.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Train a custom model for document processing.",
                "explanation": "Training a custom model is unnecessary in this scenario since the prebuilt Invoice model meets the requirements for standard invoices.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use a general-purpose model for text extraction.",
                "explanation": "Using a general-purpose model for text extraction lacks the specificity required to extract structured fields like invoice numbers and totals.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Manually label 500 documents.",
                "explanation": "Prebuilt models eliminate the need for manual labeling for common document types like invoices.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            }
        ]
    },
    {
        "id": 234,
        "question": "Your organization needs to extract structured info from invoices, receipts, and custom forms in PDF format for analysis. Which two actions should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Train a custom model for unique forms and use prebuilt models for invoices.",
                "explanation": "Training a custom model using labeled datasets enables accurate extraction from unique forms, while the prebuilt model handles standard invoices appropriately.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Convert the documents into plain text.",
                "explanation": "Converting documents to plain text results in the loss of structural information, which is essential for meaningful data extraction.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use the General Document model exclusively.",
                "explanation": "The General Document model is deprecated and not recommended for new solutions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use the Layout model for all semantic fields.",
                "explanation": "While the Layout model extracts structure, it is not optimized for semantic field extraction from specific types like invoices.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            }
        ]
    },
    {
        "id": 235,
        "question": "You need a service to identify the location of several objects in an image and return their coordinates. Which feature should you use?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "object detection",
                "explanation": "Object detection identifies individual objects within an image and returns their bounding box coordinates, providing the precise location of each.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "image tagging",
                "explanation": "Image tagging only returns descriptive labels with confidence scores and does not include spatial coordinates.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Detect brands",
                "explanation": "Detect brands focuses only on identifying brand logos rather than general objects and locations.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "recognize domain-specific content",
                "explanation": "Recognize domain-specific content is intended for specialized scenarios and is deprecated.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 236,
        "question": "Your organization has trained a Custom Vision model with satisfactory performance. You need to make it available for predictions in production. What should you do next?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Publish the model and retrieve its Prediction URL and key.",
                "explanation": "Publishing the trained iteration is the necessary step to make the model accessible for programmatic predictions via an API endpoint.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Export the model for local use.",
                "explanation": "Exporting for local use is for edge scenarios and does not leverage the Custom Vision Prediction API in production.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Create a new Azure resource for the model.",
                "explanation": "Creating a new resource is unrelated to deploying an already trained model iteration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Re-train the model with additional data.",
                "explanation": "Re-training is unnecessary if current performance metrics are already satisfactory.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/"
            }
        ]
    },
    {
        "id": 237,
        "question": "You are developing a custom vision model to detect objects. You need to ensure the model meets required accuracy by assessing performance. What action should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/test-retrain-custom-vision-model/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Evaluate precision and recall metrics.",
                "explanation": "Evaluating precision and recall is the most effective way to assess the accuracy and reliability of an object detection model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/test-retrain-custom-vision-model/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Deploy the model without testing.",
                "explanation": "Bypassing testing is a critical error that risks deploying an unreliable model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/test-retrain-custom-vision-model/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Source new images for testing.",
                "explanation": "If the dataset already contains validation images, sourcing more for testing isn't strictly necessary for the evaluation step.",
                "source": "https://learn.microsoft.com/en-us/training/modules/test-retrain-custom-vision-model/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Retrain the model with a new dataset.",
                "explanation": "Retraining focuses on improvement, but evaluation is what assesses current performance.",
                "source": "https://learn.microsoft.com/en-us/training/modules/test-retrain-custom-vision-model/"
            }
        ]
    },
    {
        "id": 238,
        "question": "You need to efficiently improve a custom vision model's accuracy by optimizing the labeling process. Which three actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-azure-document-intelligence-studio/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Prioritize uncertainty, review suggested tags, and use Smart Labeler.",
                "explanation": "Reviewing tags with high prediction uncertainty and using Smart Labeler streamlines the process while ensuring data reliability through manual confirmation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-azure-document-intelligence-studio/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Delete all previously tagged images.",
                "explanation": "Deleting previously tagged images would result in the loss of valuable training data.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-azure-document-intelligence-studio/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Manually label all images from scratch.",
                "explanation": "Manually labeling everything from scratch is inefficient and ignores the benefits of automated suggestions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-azure-document-intelligence-studio/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Train the model without reviewing tags.",
                "explanation": "Training without reviewing tags could propagate errors into the final model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-azure-document-intelligence-studio/"
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
                "explanation": "Only the Compact domain models can be exported to edge devices; they are optimized for real-time classification on mobile/edge hardware.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Food domain",
                "explanation": "While appropriate for the subject, the standard Food domain cannot be exported for offline use like the Compact domain.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "General domain",
                "explanation": "Standard General domains are optimized for cloud high-accuracy, not for offline edge deployment.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "High-accuracy domain",
                "explanation": "These models typically require cloud compute and do not support export to edge devices.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
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
                "correct": true,
                "answer": "Upload the video, get the video index, and get the thumbnail for each keyframe.",
                "explanation": "Implementing this via API requires three calls: uploading, retrieving the index (to find keyframe IDs), and then requesting the specific thumbnails.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Upload the video and download the ZIP file of thumbnails.",
                "explanation": "Downloading a ZIP file of thumbnails is the path taken through the Azure portal UI, not the specific API workflow for disk storage.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Download the raw mp4 file.",
                "explanation": "Downloading the video file does not extract or provide keyframe thumbnails.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use SSML to identify scenes.",
                "explanation": "SSML is for speech synthesis and has no application in video keyframe extraction.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            }
        ]
    },
    {
        "id": 241,
        "question": "You are building an app using Video Indexer to analyze Teams recordings for mentions of competing companies. Which content model should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "custom brands",
                "explanation": "The Custom Brands model supports detection of specific company names and brand visual logos from speech and video content.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "custom Language",
                "explanation": "Custom Language models are for adding unrecognized words to the transcription engine, not for specific brand tracking.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "custom slate",
                "explanation": "Slate detection is for clapper boards and digital patterns in professional video production.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "OCR only",
                "explanation": "While OCR helps with on-screen text, it wouldn't capture verbal mentions of competitors handled by the brands model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            }
        ]
    },
    {
        "id": 242,
        "question": "You are building a video processing app to extract insights from multilingual content. Which value should you set for the sourceLanguage parameter?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "multi-language detection",
                "explanation": "When indexing a video via API, setting sourceLanguage to 'multi-language detection' enables the service to identify and transcribe multiple languages within the same file.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "language detection",
                "explanation": "Simple language detection usually targets a single dominant language rather than handling multiple languages in one file.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "auto-translate",
                "explanation": "Auto-translate is a post-processing feature, not a setting for the source language detection mode.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "multi-lingual detection",
                "explanation": "While similar in meaning, the specific technical parameter value required by the API is 'multi-language detection'.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
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
                "correct": true,
                "answer": "Azure Document Intelligence in Foundry Tools",
                "explanation": "Azure Document Intelligence is the specific service designed to use ML to extract text and structured key/value pairs from documents like invoices.",
                "source": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure AI Search",
                "explanation": "Azure AI Search is for exploring content at scale, but the actual extraction of key/value pairs from invoices is handled by Document Intelligence.",
                "source": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure AI Immersive Reader",
                "explanation": "Immersive Reader is a tool for reading comprehension and accessibility, not for data extraction.",
                "source": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure AI Metrics Advisor",
                "explanation": "Metrics Advisor is for time-series data monitoring and anomaly detection.",
                "source": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/"
            }
        ]
    },
    {
        "id": 244,
        "question": "Your company plans to develop an app with an AI model using proprietary data. You need to select an Azure platform to ensure the model is operationalized effectively. Which Azure service should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Microsoft Foundry",
                "explanation": "Microsoft Foundry is the appropriate platform because it offers specialized tools for deploying models, connecting data, and managing AI resources effectively.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Content Understanding in Foundry Tools",
                "explanation": "This focuses on multimodal content analysis rather than broader model operationalization and custom development.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure Speech in Foundry Tools",
                "explanation": "This service is limited to speech-related tasks and lacks model management features.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Vision in Foundry Tools",
                "explanation": "This is tailored for prebuilt computer vision tasks, not for the end-to-end operationalization of custom AI models.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/"
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
                "explanation": "Azure AI Services support disconnected Docker containers, which allow you to run capabilities like Language Understanding on-premises without internet access.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Download the model and deploy it to a virtual machine.",
                "explanation": "There is no standard 'download and install' package for these models outside of the specific container-based deployment path.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use a Microsoft Foundry Service standard instance.",
                "explanation": "Standard instances run in the Azure cloud and require persistent internet connectivity.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use Azure AI Search.",
                "explanation": "Azure AI Search is a cloud-only service and does not address the offline deployment requirement.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/"
            }
        ]
    },
    {
        "id": 246,
        "question": "You need to deploy a foundation model to Foundry that can generate content, summarize text, understand images, perform semantic search, and generate code. Which model provider should you use?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "OpenAI",
                "explanation": "OpenAI models in Microsoft Foundry (like GPT-4o) natively support a broad set of integrated multimodal, text, and code capabilities required for this scenario.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Cohere",
                "explanation": "Cohere models primarily focus on RAG and summarization rather than full multimodal and integrated code-generation support.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Meta",
                "explanation": "Meta models emphasize large-scale text generation but lack the specific integrated multimodal features in the Foundry catalog for this set of requirements.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Mistral",
                "explanation": "Mistral provides strong text reasoning but lacks the full integrated multimodal and code support compared to OpenAI models in Foundry.",
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
                "correct": true,
                "answer": "az cognitiveservices account show --name myresource --resource-group cognitive-services-resource-group",
                "explanation": "To retrieve the endpoint and other details, you must provide both the resource name and the resource group in the CLI command.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "az cognitiveservices account show --name myresource",
                "explanation": "This command is insufficient as it lacks the required resource-group parameter.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "az cognitiveservices account list",
                "explanation": "This lists all accounts but does not specifically target a resource to return its unique endpoint details in a focused output.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "az cognitiveservices account show",
                "explanation": "This command fails because it requires identifiers like name and resource group to function.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/"
            }
        ]
    },
    {
        "id": 248,
        "question": "Your Custom Vision app is deployed to a VM in Azure with firewall rules enabled on your AI Services account. How can you ensure the app can access the service?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/secure-azure-ai-services/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Grant access to a specific virtual network.",
                "explanation": "Since the app is on a VM within a virtual network, granting that VNET access to the AI Service endpoint through the firewall is the correct solution.",
                "source": "https://learn.microsoft.com/en-us/training/modules/secure-azure-ai-services/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Assign an RBAC role.",
                "explanation": "RBAC handles identity permissions but does not bypass network-level firewall restrictions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/secure-azure-ai-services/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Grant access to an internet IP range.",
                "explanation": "This is incorrect because internal Azure traffic within a VNET should be handled via VNET rules rather than public internet ranges.",
                "source": "https://learn.microsoft.com/en-us/training/modules/secure-azure-ai-services/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Include an access token in the header.",
                "explanation": "Tokens handle authentication but do not resolve connectivity issues caused by a firewall.",
                "source": "https://learn.microsoft.com/en-us/training/modules/secure-azure-ai-services/"
            }
        ]
    },
    {
        "id": 249,
        "question": "While developing a containerized OCR application, you retrieve a status message of 'Mismatch'. What should you do to ensure the solution connects?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Confirm that the API key is for the correct resource type.",
                "explanation": "A 'Mismatch' status typically indicates that the API key provided belongs to a different type of Azure AI Services resource than the one the container expects.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Confirm that the resource is online.",
                "explanation": "A mismatch error specifically refers to credentials/configuration, not the online status of the resource.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Upgrade to a higher tier.",
                "explanation": "Pricing tiers affect quotas and features but do not cause a resource type mismatch error.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Confirm the API key is for the correct region.",
                "explanation": "While region is important, the 'Mismatch' status specifically points to a resource type conflict.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/"
            }
        ]
    },
    {
        "id": 250,
        "question": "Your website uses a content safety solution for shared PNG files, but users report some valid images fail to display. What should you do to ensure proper flags?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Adjust the severity level.",
                "explanation": "Modifying the severity levels for blocking based on user feedback is the standard practice for balancing safety with system usability.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Adjust the content categories.",
                "explanation": "Categories define the type of harm, but the threshold (severity level) is what determines whether an image is blocked or allowed.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Convert the images to a different format.",
                "explanation": "Content safety analysis is independent of the image file format (PNG vs JPG).",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Remove the severity level entirely.",
                "explanation": "Removing severity levels would disable the safety filtering entirely, which is not the goal.",
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
                "correct": true,
                "answer": "Content Safety",
                "explanation": "Content Safety is the specialized service designed to automatically flag harmful content in text or images across categories like hate, violence, and self-harm.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure AI Search",
                "explanation": "Azure AI Search is for indexing and retrieval, not for safety policy enforcement.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Document Intelligence",
                "explanation": "Document Intelligence extracts data fields from forms but does not evaluate content for safety violations.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Metrics Advisor",
                "explanation": "Metrics Advisor is for anomaly detection in numerical time-series data.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 252,
        "question": "You are developing an e-learning platform and need to ensure generated educational content complies with standards and avoids inappropriate material. What should you implement?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/content-safety-overview/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Implement Microsoft Foundry Content Safety.",
                "explanation": "Azure Content Safety is the most suitable solution as it analyzes inputs and documents to detect and block harmful or policy-violating content effectively.",
                "source": "https://learn.microsoft.com/en-us/training/modules/content-safety-overview/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Enable Azure Translator.",
                "explanation": "Translator enhances accessibility through multilingual support but does not safeguard against inappropriate content.",
                "source": "https://learn.microsoft.com/en-us/training/modules/content-safety-overview/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use Azure Language in Foundry Tools.",
                "explanation": "While Text Analytics can evaluate sentiment, it does not provide the dedicated safety filtering required for inappropriate material.",
                "source": "https://learn.microsoft.com/en-us/training/modules/content-safety-overview/"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Train a custom model with additional datasets.",
                "explanation": "Training improves relevance but does not provide a dedicated governance framework for blocking harmful outputs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/content-safety-overview/"
            }
        ]
    }
]