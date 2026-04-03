const questionPool = [
    {
        "id": 207,
        "question": "Your organization is developing an AI agent for customer support inquiries that must integrate with Azure resources. You need to select a framework that supports AI orchestration and multi-agent workflows. What should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/2-understand-resources",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Bot Framework",
                "explanation": "Azure Bot Framework is commonly used for building conversational bots but does not provide the orchestration features required for multi-agent workflows.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Machine Learning Studio",
                "explanation": "Azure Machine Learning Studio is focused on developing machine learning models and does not address the need for orchestration in this scenario.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Cognitive Services API",
                "explanation": "Cognitive Services API offers pre-built AI functionalities but lacks the ability to orchestrate multi-agent workflows.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Semantic Kernel framework",
                "explanation": "Semantic Kernel framework is the most suitable choice as it supports generative AI orchestration and multi-agent workflows, aligning perfectly with the requirements of the scenario.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 208,
        "question": "Your organization is developing an AI agent to assist with document retrieval and analysis using Microsoft Azure services. You need to enable the AI agent to access external data sources for processing documents. What should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/4-consume-azure-ai-services",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Configure a custom model in Azure Machine Learning.",
                "explanation": "Configuring a custom model in Azure Machine Learning focuses on document analysis but does not address the retrieval aspect, making it unsuitable.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Enable default capabilities in Azure Document Intelligence in Foundry Tools.",
                "explanation": "Enabling default capabilities in Azure Document Intelligence lacks the specific retrieval functionality needed for the task.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use Azure Vision in Foundry Tools Service.",
                "explanation": "Azure Vision in Foundry Tools Service can perform OCR but is not well suited for document processing and lacks the retrieval aspect.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Use Azure AI Search with built-in skills.",
                "explanation": "Azure AI Search is the most suitable solution because it provides the required functionality for accessing and analyzing external documents with built-in skills, which aligns with the scenario's needs.",
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
                "explanation": "Adding Bing search tools enables the agent to retrieve relevant information from external sources, enhancing its ability to respond accurately to user queries.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Configure Azure Functions in the agent configuration file.",
                "explanation": "Configuring Azure Functions allows the agent to execute specific actions programmatically, which is crucial for automating workflows based on user inputs.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Deploy a containerized image.",
                "explanation": "Deploying a containerized image is not necessary to configure the agent's capabilities for this specific customer support workflow task.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Set up a SQL database.",
                "explanation": "Setting up a SQL database is not required for configuring the agent's interaction capabilities, as it does not directly contribute to the goal of automating customer support workflows.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "Use Computer Vision.",
                "explanation": "Using Computer Vision is unrelated to the task of configuring the agent for customer support workflows, as it focuses on image analysis rather than interaction with external data sources.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 210,
        "question": "You have an Azure OpenAI solution using a GPT-3.5-Turbo model with auto-update disabled. Sometime later, you discover that it uses a newer version of the model. Why was the model version updated?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Auto-update is always enabled.",
                "explanation": "Auto-update is not always enabled; it can be manually disabled to allow manual control over model upgrades.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Auto-update is enabled automatically when a new version is released.",
                "explanation": "New versions do not trigger automatic updates if auto-update is disabled, unless retirement occurs.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Model versions are updated automatically after five updates.",
                "explanation": "Model version counts do not trigger automatic updates; updates are tied to the specific retirement schedule of a version.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "The model version reached its retirement date.",
                "explanation": "When you select a specific model version for a deployment, it remains selected until either manually updated or until it reaches its retirement date, at which point it upgrades to the default version automatically.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 211,
        "question": "An organization plans to use Azure OpenAI in Foundry Models to process user input and generate content. You need to create visual content from text descriptions. What should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/3-azure-ai-services",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Search",
                "explanation": "Azure AI Search focuses on information retrieval and does not support visual content creation.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "DALL-E",
                "explanation": "DALL-E is the appropriate choice for creating visual content from text descriptions, as it is specifically designed for this purpose.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "GPT-4",
                "explanation": "GPT-4 is optimized for text-based tasks and lacks the capability to generate visual content.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Text Embedding Models",
                "explanation": "Text Embedding Models are intended for vectorizing text strings for search tasks and are unrelated to creating visual content.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 212,
        "question": "Your company is developing a chatbot to provide answers based on internal knowledge. You need to improve the chatbot's ability to retrieve and process information. Which two actions should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/3-azure-ai-services",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Index the knowledge base with AI Search.",
                "explanation": "Indexing with AI Search creates a searchable index, allowing the chatbot to efficiently retrieve relevant information to provide accurate responses.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Integrate the Embeddings API.",
                "explanation": "Integrating the Embeddings API enhances semantic processing of queries, enabling the chatbot to understand user intent accurately.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Train a custom language model.",
                "explanation": "Training a custom model is unnecessary because pre-trained models like GPT-4 are already optimized and can handle the required functionality when provided with external context.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use AI Vision for document analysis.",
                "explanation": "AI Vision is designed for image analysis rather than processing textual knowledge base documents for conversational retrieval.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 213,
        "question": "You are building a web app using DALL-E 3. Which three HTTP header properties should you include to successfully generate images?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/reference",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "the API version used in this operation",
                "explanation": "The api-version is a required header property for Azure OpenAI REST API requests.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "the name of the Azure OpenAI service resource",
                "explanation": "The name of the resource is necessary to identify the endpoint being called.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "the name of the DALL-E 3 model deployment",
                "explanation": "The specific model deployment name is required for the request to target the correct instance of DALL-E 3.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "the quality of the generated images",
                "explanation": "Image quality settings are valid in the HTTP request body, but not in the header.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "the user's prompt",
                "explanation": "The prompt is part of the request payload (body), not the HTTP header.",
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
                "explanation": "This improves response format but cannot provide domain-specific grounding needed for accurate summaries of unique company data.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Deploy a model without grounding data and rely on pre-trained capabilities.",
                "explanation": "Relying solely on pre-trained capabilities leads to less accurate outputs and potential hallucinations for domain-specific tasks.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Fine-tune a model using customer query data without an orchestration layer.",
                "explanation": "Fine-tuning is significantly more expensive and less effective at dynamic contextual integration than RAG.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Use Retrieval-Augmented Generation (RAG) with Azure AI Search for grounding data.",
                "explanation": "Using RAG with Azure AI Search ensures the model provides accurate summaries by incorporating domain-specific data contextually and cost-effectively.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 215,
        "question": "You use Azure OpenAI to generate code snippets. You need to ensure the generated code adheres to your organization's coding standards. What action should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Enable multi-region deployment.",
                "explanation": "Multi-region deployment increases availability but does not affect the style or compliance of the code output.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Increase compute resources.",
                "explanation": "Compute power affects speed, not the adherence to specific organizational coding standards.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Provide standard-compliant examples in prompts.",
                "explanation": "Providing examples (few-shot prompting) in the prompts ensures the AI model generates code that aligns with the provided standards.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Switch to a chat-optimized model.",
                "explanation": "Chat-optimized models are not specifically designed to automatically know or improve code adherence to proprietary standards.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 216,
        "question": "You are deploying a generative AI solution to process customer feedback. You need to optimize the solution and ensure responses align with organizational tone. Which three actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/fine-tune-model-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Fine-tune the model with customer feedback data.",
                "explanation": "Fine-tuning customizes the model to meet specific organizational requirements for tone and style.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Set up monitoring in Azure to track response accuracy and resource usage.",
                "explanation": "Continuous monitoring is essential to evaluate the model's ongoing performance and resource efficiency.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Use prompt engineering to refine the model's output.",
                "explanation": "Prompt engineering refines the quality and relevance of generated content through structured input.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Deploy the model on edge devices.",
                "explanation": "Edge deployment addresses connectivity and local latency but not organizational style alignment or accuracy.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 217,
        "question": "You need to reduce the randomness of a text-generation model's output to make responses more predictable and consistent. Which parameter should you configure?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "max_tokens",
                "explanation": "Max_tokens only limits the length of the response, not its variation or randomness.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "role",
                "explanation": "The role parameter defines the author (System, User, Assistant), not the randomness of the model's completion engine.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "stop",
                "explanation": "The stop parameter identifies sequences that halt generation but does not influence tone or randomness.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "temperature",
                "explanation": "Temperature directly controls randomness and creativity. Lowering the value makes responses more focused and deterministic.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 218,
        "question": "You have a generative AI application using a Microsoft Foundry flow. You need to enable tracing and collect feedback with minimal administrative effort. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/flow-trace-feedback",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Add environment variables to the YAML file.",
                "explanation": "Environment variables do not natively enable tracing or feedback collection features.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "From Deployment, configure the Application Insights diagnostics settings.",
                "explanation": "Microsoft Foundry integrates natively with Application Insights at the deployment level for minimal effort tracing and feedback setup.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Modify the YAML file of the flow deployment.",
                "explanation": "Modifying YAML files involves manual configuration effort compared to the built-in diagnostic settings toggle.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 219,
        "question": "You are building an app using Azure Translator document translation. You need to improve the quality of translation for user-uploaded documents. What should you ask users to include?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/translator/document-translation/overview",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "a summary",
                "explanation": "Summaries do not help the core translation engine accurately interpret the original text.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "the file format",
                "explanation": "The service automatically detects file formats; knowing it doesn't inherently improve linguistic accuracy.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "the source language",
                "explanation": "Specifying the source language helps the service provide a better translation result than relying solely on automatic detection.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "the writing style",
                "explanation": "Writing style is not a standard metadata parameter used to improve accuracy in the document translation API.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 220,
        "question": "Your sentiment analysis app notice misses granular information, returning whole-sentence negative results for mixed feedback. What should you add to the API request to fix this?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "loggingOptOut=true",
                "explanation": "This parameter is for privacy and does not affect the granularity of the analysis.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "StringIndexType=TextElements_v8",
                "explanation": "This sets character offset values and does not change the sentiment analysis logic.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "opinionMining=true",
                "explanation": "Setting opinionMining to true adds aspect-based analysis, allowing for positive and negative sentiment labels within the same sentence for specific targets.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 221,
        "question": "You are building an app that will analyze resumes and remove names and addresses using PII detection. Which categories should you specify in the request?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/publish-use-language-understanding-app/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Person, Address, and IP",
                "explanation": "IP would remove network identifiers which are not required for removing names and physical addresses.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Person and Address only",
                "explanation": "Specifying Person and Address categories will specifically detect names and physical addresses as required.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Person, PersonType, and Address",
                "explanation": "PersonType would remove job roles, which is not part of the stated requirement.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 222,
        "question": "You are building a custom translation model and need a BLEU score indicating high quality. What is the minimum score range required?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "0 to 19",
                "explanation": "This range indicates low-quality or nonsensical translation results.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "20 to 39",
                "explanation": "This range indicates marginal translation quality.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "40 to 59",
                "explanation": "A BLEU score between 40 and 60 is the recognized range indicating a high-quality, human-like translation.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "80 to 100",
                "explanation": "While high, such scores are rarely achievable and not the standard baseline for high quality.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 223,
        "question": "A speech-to-text app has a high Word Error Rate (WER) with many substitution errors. What should you add to the training data to reduce WER?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "custom product and people names",
                "explanation": "Substitution errors are often resolved by training the model on domain-specific product names and people names.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "overlapping speakers",
                "explanation": "Overlapping speakers usually lead to deletion errors (missing words) rather than substitution.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "people talking in the background",
                "explanation": "Background chatter typically results in insertion errors (extra words) rather than substitution.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 224,
        "question": "You need an Azure Speech model to enable users to create notes in noisy environments like a factory floor. Which model should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "base",
                "explanation": "The base model is for general use and lacks specialized training for high-noise factory environments.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "base with customizations",
                "explanation": "While similar, the term specifically for this scenario is a custom speech-to-text model.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "custom speech-to-text",
                "explanation": "A custom speech-to-text model allows the engine to be adapted specifically to ambient noise patterns like those of a factory floor.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "default",
                "explanation": "The default model is not optimized for noisy conditions.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 225,
        "question": "You are building a multilingual conversational app using CLU. You need to optimize performance while minimizing development effort. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-language-understanding-model/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Add utterances for languages that are performing poorly in the model.",
                "explanation": "Adding targeted utterances for poorly performing languages within a single project is the most efficient way to increase performance in CLU.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Configure the app to only query utterances in the language used to train.",
                "explanation": "This restricts functionality and does not solve the model's performance issues for other languages.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Create separate projects for each language.",
                "explanation": "Creating separate projects increases administrative and development effort significantly.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 226,
        "question": "Which two parameters influence the operational costs for the Azure Language question answering service? (Choose two)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-question-answering-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "the number of assigned metadata tags",
                "explanation": "Metadata tags do not directly influence the pricing tier or transaction costs.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "the number of knowledge base editors",
                "explanation": "Editor count is an RBAC management feature and does not affect operational billing.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "the required throughput",
                "explanation": "Required throughput determines the specific pricing tier needed to handle request volume, directly impacting cost.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "the size and the number of knowledge bases",
                "explanation": "The number and size of knowledge bases determine the storage requirements and the required AI Search tier.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 227,
        "question": "You plan to use the 'Using your data' feature to ground a GPT model. Which four types of files are supported? (Choose four)",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "HTML",
                "explanation": "HTML is a supported format for model grounding in the 'Using your data' feature.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "MD",
                "explanation": "Markdown (.md) files are natively supported.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "PDF",
                "explanation": "PDF documents are one of the primary supported formats for data ingestion.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "TXT",
                "explanation": "Plain text (.txt) files are supported for grounding models.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "XML",
                "explanation": "XML files are currently not supported by this feature.",
                "source": "Sample Test"
            },
            {
                "id": 6,
                "correct": false,
                "answer": "ZIP",
                "explanation": "ZIP files must be extracted before the content can be indexed; the ZIP format itself is not supported.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 228,
        "question": "What are the minimum required sections you must include in an Azure AI Search skillset definition?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-custom-skill-for-azure-cognitive-search/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "name, description, and skills",
                "explanation": "A skillset must at minimum have a name, a description, and an array of skills to execute. Other sections are optional.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "name, description, knowledgeStore, and encryptionKey",
                "explanation": "This list misses the mandatory 'skills' section and includes optional components.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "name, description, skills, and cognitiveServices",
                "explanation": "cognitiveServices is only required for billable API calls, but is not a structural minimum requirement for every definition.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 229,
        "question": "Your company needs to classify incoming documents into predefined categories before data extraction. Which solution should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-financial-id-tax-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Vision OCR",
                "explanation": "OCR only extracts text and lacks the logic to categorize documents semantically.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Custom classification model in Azure Document Intelligence",
                "explanation": "The custom classification model is designed specifically to categorize documents into predefined classes for downstream extraction.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Custom template model in Azure Document Intelligence",
                "explanation": "Template models are for extracting data from a specific known layout, not for broad document classification.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Invoice model in Azure Document Intelligence",
                "explanation": "The Invoice model is a prebuilt model for a specific type, not a general tool for classifying multiple different document categories.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 230,
        "question": "You need to extract text, tables, and selection marks from multi-page PDF documents while maintaining the document's structure. What should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-general-document-read-layout-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Vision OCR",
                "explanation": "General OCR does not support advanced structural recognition like tables or selection marks.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Document Intelligence general model",
                "explanation": "The general model focuses on entity extraction but does not maintain structure as effectively as the layout model.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Azure Document Intelligence layout model",
                "explanation": "The layout model is specifically designed to extract text, tables, and selection marks while preserving structural integrity.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Document Intelligence read model",
                "explanation": "The read model is for raw text extraction and does not include advanced structural capabilities for tables and checkboxes.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 231,
        "question": "Which three document formats does the Azure Document Intelligence prebuilt-read model support? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/extract-data-from-forms-with-form-recognizer/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "JSON",
                "explanation": "JSON is an unsupported input format for the prebuilt-read model.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Microsoft Excel",
                "explanation": "The prebuilt-read model natively supports Microsoft Excel files.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Microsoft Word",
                "explanation": "The prebuilt-read model natively supports Microsoft Word files.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "PDF",
                "explanation": "PDF is a primary supported format for the prebuilt-read model.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "TXT",
                "explanation": "TXT files are not listed as a supported complex document format for the prebuilt-read model.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 232,
        "question": "Your organization processes invoices and needs to extract fields like invoice number and due date. Which two actions should you perform? (Choose two)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/document-intelligence-invoice-model/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Create a custom model for invoice processing.",
                "explanation": "A custom model is unnecessary as the prebuilt invoice model already handles these standard requirements.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Label all invoice documents manually.",
                "explanation": "Manual labeling is eliminated when using a prebuilt model.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Provision an Azure Document Intelligence in Foundry Tools resource.",
                "explanation": "Provisioning the resource is the required first step to enable the service capabilities.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Use the prebuilt invoice model to extract key fields.",
                "explanation": "Using the prebuilt invoice model is the most efficient way to extract standard invoice data fields.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 233,
        "question": "An organization needs to automate invoice data extraction and integration. Which two actions should you take using Microsoft Azure Document Intelligence? (Choose two)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Integrate the extracted data with an organization's database.",
                "explanation": "Integrating the data ensures that the information is usable within organizational systems and workflows.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Train a custom model for document processing.",
                "explanation": "A custom model is unnecessary if the prebuilt model covers the standard invoice type.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Use the prebuilt Invoice model for data extraction.",
                "explanation": "The prebuilt Invoice model is ideal as it is specifically designed to handle and extract structured data from invoices efficiently.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use a general-purpose model for text extraction.",
                "explanation": "General models lack the structural awareness to extract specific fields like invoice numbers.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 234,
        "question": "Your organization scans various document types (invoices, custom forms) in PDF. You need to extract structured information. Which two actions should you take? (Choose two)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Train a custom model using labeled datasets in Azure Document Intelligence.",
                "explanation": "Training a custom model allows for accurate extraction from proprietary or unique forms that do not fit prebuilt templates.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Convert the documents into plain text.",
                "explanation": "Converting to plain text results in the loss of structural info needed for structured extraction.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Use the prebuilt Invoice model.",
                "explanation": "The prebuilt model is optimized for extracting key information specifically from standard invoices.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use the Layout model for all semantic fields.",
                "explanation": "The Layout model extracts tables and structure but is not semantically optimized for specific field extraction like the prebuilt or custom models.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 235,
        "question": "You need the service to identify the location of several objects in an image and return their coordinates. Which feature should you use?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Detect brands",
                "explanation": "Detect brands only focuses on identifying logos, not general object coordinates.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "image tagging",
                "explanation": "Tagging returns descriptive labels but does not provide bounding box coordinates.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "object detection",
                "explanation": "Object detection identifies individual objects within an image and returns their precise bounding box coordinates.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 236,
        "question": "You have trained a custom vision model with satisfactory metrics. What should you do next to make the model available for production predictions?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-azure-document-intelligence/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Export the model for local use.",
                "explanation": "Exporting is for edge deployment, not for making the model available via a production API endpoint.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Publish the model and retrieve its Prediction URL and key.",
                "explanation": "Publishing the iteration makes it accessible for programmatic predictions in production environments.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Re-train the model with additional data.",
                "explanation": "Re-training is unnecessary if performance metrics are already satisfactory.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 237,
        "question": "You need to ensure a trained custom vision model meets required accuracy. What action should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/test-retrain-custom-vision-model/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Evaluate precision and recall metrics.",
                "explanation": "Evaluating precision and recall is the standard and most effective way to assess an object detection model's performance accuracy.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Deploy the model without testing.",
                "explanation": "Deploying without testing prevents the evaluation of model reliability.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Retrain the model with a new dataset.",
                "explanation": "Retraining is for improvement, not for assessing current trained accuracy.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 238,
        "question": "You need to efficiently improve a model's accuracy by optimizing labeling for untagged images. Which three actions should you perform? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-azure-document-intelligence-studio/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Prioritize reviewing tags with high prediction uncertainty.",
                "explanation": "Focusing on uncertain tags addresses ambiguous cases effectively and speeds up model improvement.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Review and confirm suggested tags for each image.",
                "explanation": "Reviewing and confirming automated suggestions ensures data reliability while saving time.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Use Smart Labeler to suggest tags for untagged images.",
                "explanation": "Smart Labeler leverages the existing model to automate tagging, streamlining the process significantly.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Delete all previously tagged images.",
                "explanation": "Deleting tagged images would result in the loss of valuable training data.",
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
                "explanation": "Compact domains are specifically optimized for real-time execution and can be exported for use on mobile and edge devices.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Food domain",
                "explanation": "The standard Food domain cannot be exported for offline edge use.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "General domain",
                "explanation": "General domains are optimized for cloud high-accuracy and are not exportable for offline use.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 240,
        "question": "You need to extract keyframes from uploaded video and store them on a disk using the API. How should you implement the solution?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Upload the video and download the ZIP file of thumbnails.",
                "explanation": "This describes the manual portal method, not the programmatic API implementation.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Upload the video, get the video index, and get the thumbnail for each keyframe.",
                "explanation": "This is the correct API-driven implementation consisting of three specific steps to retrieve and store keyframes.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use SSML to identifies frames.",
                "explanation": "SSML is for speech synthesis and unrelated to video keyframe extraction.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 241,
        "question": "You are building an app using the Video Indexer API to search Teams meeting recordings for images and mentions of competing companies. Which content model should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "custom brands",
                "explanation": "The custom brands model identifies mentions and visuals of well-known or specified organizations.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "custom Language",
                "explanation": "Custom language models add unrecognized words but do not specifically track competitor brand mentions.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "custom slate",
                "explanation": "Slate detection is for digital patterns and color bars in production video.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 242,
        "question": "You are using Video Indexer to extract insights from multilingual content. Which value should you set for the sourceLanguage parameter?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "language detection",
                "explanation": "Simple language detection does not enable identifying multiple languages in one file.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "multi-language detection",
                "explanation": "Setting sourceLanguage to 'multi-language detection' enables transcription of multiple languages within the same video file.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "multi-lingual detection",
                "explanation": "The specific technical parameter value required by the API is 'multi-language detection'.",
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
                "explanation": "AI Search is for large-scale content exploration, not for structured key/value pair extraction from invoices.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure Document Intelligence in Foundry Tools",
                "explanation": "Azure Document Intelligence is specifically designed to identify and extract text and structured data fields from documents.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure AI Immersive Reader",
                "explanation": "Immersive Reader is for reading comprehension and accessibility, not for data extraction.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 244,
        "question": "Your company needs to select an Azure platform to ensure an AI model using proprietary data is operationalized effectively. Which Azure service should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Content Understanding",
                "explanation": "This service focuses on content analysis rather than broader model operationalization.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Microsoft Foundry",
                "explanation": "Microsoft Foundry provides specialized tools for deploying, connecting, and managing AI models and proprietary data effectively.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure Speech",
                "explanation": "Azure Speech is limited to audio tasks and does not manage general AI model operationalization.",
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
                "explanation": "Azure AI Services support disconnected Docker containers which allow running capabilities like Language Understanding on-premises without cloud access.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Download the model and deploy it to a virtual machine.",
                "explanation": "Models cannot be simply downloaded to a VM without the supported container framework.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use a Microsoft Foundry standard instance.",
                "explanation": "Standard instances require cloud connectivity to operate.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 246,
        "question": "You need to deploy a foundation model that can generate content, summarize, understand images, perform semantic search, and generate code. Which model provider should you use?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Cohere",
                "explanation": "Cohere models typically focus on RAG and summarization rather than integrated multimodal image understanding.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Meta",
                "explanation": "Meta models lack the integrated multimodal support found in OpenAI foundation models within Foundry for this specific set of tasks.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "OpenAI",
                "explanation": "OpenAI models (like GPT-4o) in Foundry support content generation, image understanding, semantic search, and code generation natively.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 247,
        "question": "Which Azure CLI command identifies the endpoint for a Microsoft Foundry Service resource? (Provide specific parameters)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-manage-azure-ai-services/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "az cognitiveservices account show",
                "explanation": "This command fails because it requires identifiers like name and resource group to target a specific resource.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "az cognitiveservices account show --name myresource --resource-group cognitive-services-resource-group",
                "explanation": "Providing both name and resource group is the correct way to retrieve specific resource details including the endpoint.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "az cognitiveservices account list",
                "explanation": "This lists all accounts but does not return the detailed endpoint configuration of a specific target resource in the same way.",
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
                "explanation": "RBAC handles identity but does not bypass firewall network restrictions.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Grant access to a specific virtual network.",
                "explanation": "Since the VM is within a VNET, granting that network access through the service firewall is the correct solution.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Grant access to an internet IP range.",
                "explanation": "Internal Azure traffic should be routed via VNET rules rather than public internet ranges.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 249,
        "question": "While developing a containerized OCR application, you retrieve a status message of 'Mismatch'. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-azure-ai-services-containers/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Confirm that the API key is for the correct region.",
                "explanation": "While important, a 'Mismatch' status specifically indicates a resource type conflict.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Confirm that the API key is for the correct resource type.",
                "explanation": "Mismatch errors occur when the provided key belongs to a different kind of service than the one the container expects.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Upgrade the resource to a higher tier.",
                "explanation": "Tiers affect usage limits but do not cause resource type mismatch errors.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 250,
        "question": "Your website uses a content safety solution, but some valid images fail to display. What should you do to ensure proper flags?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Adjust the content categories.",
                "explanation": "Categories define what is identified, not the threshold for whether it is blocked.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Adjust the severity level.",
                "explanation": "Modifying severity levels for blocking allows you to balance safety with usability based on observed feedback.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Convert images to a different format.",
                "explanation": "Safety analysis is format-independent for common image types.",
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
                "explanation": "AI Search indices content but does not perform automated safety flagging.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Content Safety",
                "explanation": "Content Safety is designed specifically to flag harmful content like hate speech or violence in text and images.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Document Intelligence",
                "explanation": "Document Intelligence focuses on data extraction, not safety policy evaluation.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 252,
        "question": "You are developing an e-learning platform and need to ensure generated content avoids inappropriate material. What should you implement?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/content-safety-overview/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Enable Azure Translator.",
                "explanation": "Translator provides multilingual support but lacks safety content evaluation.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Implement Microsoft Foundry Content Safety.",
                "explanation": "Content Safety is the suitable solution for detecting and blocking harmful or policy-violating content in educational systems.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use Azure Language in Foundry Tools.",
                "explanation": "Standard language tools evaluate sentiment but do not provide dedicated safety filtering for harm categories.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 253,
        "question": "You are building a mobile app that scans street signs and reads out the text. Which service should you recommend to minimize development effort?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-ocr",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Azure Vision in Foundry Tools",
                "explanation": "Azure Vision is the primary service that provides OCR for general images like street signs.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure AI Custom Vision",
                "explanation": "Custom Vision is for classification and object detection, not text OCR.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure Face",
                "explanation": "The Face service is for biometric analysis, not for reading signs.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Document Intelligence",
                "explanation": "While it has OCR, it is optimized for structured documents rather than general outdoor scene images.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 254,
        "question": "You are provisioning an Azure OpenAI resource and need to ensure it is only available to apps in your subscription. Which network security setting should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "All networks",
                "explanation": "This setting leaves the resource open to the public internet.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Disabled, and allow a private endpoint connection to establish access",
                "explanation": "Setting network access to 'Disabled' and using a private endpoint ensures the resource is only accessible via a private IP in your internal infrastructure.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Selected networks",
                "explanation": "Selected networks can still include public ranges, whereas a private endpoint is stricter and aligns better with subscription-only requirements.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 255,
        "question": "You discover attempts to jailbreak your Azure OpenAI custom agent through prompt injection. Which service should you include to prevent this?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Content Safety",
                "explanation": "Content Safety includes specialized jailbreak risk detection for LLM applications.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Language",
                "explanation": "Language provides NLP, but dedicated harm and jailbreak detection logic resides in the Content Safety service.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Vision",
                "explanation": "Vision is unrelated to preventing prompt injection attacks on generative models.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 256,
        "question": "Your organization is implementing Content Safety to moderate social messaging. You need to restrict harmful text while allowing custom patterns. Which two actions should you take? (Choose two)",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Configure harmful patterns using the Custom Categories API.",
                "explanation": "This API allows organizations to define specific tailored moderation patterns for their needs.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Enable built-in blocklists in Content Safety Studio.",
                "explanation": "Built-in blocklists provide immediate protection against standard harmful terms and hate speech.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Enable encryption at rest with customer-managed keys.",
                "explanation": "Encryption is for storage security and does not contribute to content moderation logic.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use the Analyze Image API.",
                "explanation": "This API is for images, not for the moderation of text content.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 257,
        "question": "You are building an app to flag documents containing staff names using the PII detection feature. Which category should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/personally-identifiable-information/concepts/entity-categories",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Age",
                "explanation": "Age detects numerical ages, not names.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "DateTime",
                "explanation": "DateTime identifies date and time references.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Person",
                "explanation": "The Person category specifically identifies names of individuals in the PII detection service.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "PhoneNumber",
                "explanation": "PhoneNumber identifies telephone numbers.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 258,
        "question": "You are analyzing meeting recordings and need to identify who is speaking at which moment. Which voice profile type should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speaker-recognition-overview",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Speaker identification",
                "explanation": "Speaker identification identifies unknown speakers within an enrolled group (1:N), which is necessary for meeting transcription attribution.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "text-dependent verification",
                "explanation": "Verification is a 1:1 check and 'text-dependent' requires a specific passphrase unsuitable for natural meetings.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "text-independent verification",
                "explanation": "Verification is used to confirm a single claimed identity, not to identify which of many speakers is talking.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 259,
        "question": "You are building an app to recognize intent. When should you choose simple pattern matching over more advanced services like Azure Language?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-recognize-intents-from-speech-csharp",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "You are only interested in matching strictly what the user said.",
                "explanation": "Pattern matching is best for strict, literal phrasing where ML interpretation is not required or desired.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "You must use a machine learned entity.",
                "explanation": "Machine learned entities are features of Azure Language, not simple pattern matching.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "You must use a prebuilt entity.",
                "explanation": "Prebuilt entities are provided by Azure AI services, not pattern matching logic.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 260,
        "question": "You review a custom question answering project but do not see any active learning suggestions. What should you do to see them with minimal effort?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/question-answering/how-to/improve-knowledge-base",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Add questions manually.",
                "explanation": "This increases administrative effort significantly.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Enable logging for the project.",
                "explanation": "Logging documents activity but doesn't immediately force suggestions.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Wait at least 30 minutes before checking for suggestions.",
                "explanation": "Active learning suggestions are delayed approximately 30 minutes to maintain service performance.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 261,
        "question": "An API call to add synonyms to a question answering solution fails. The list includes '#diagnostic'. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/question-answering/how-to/query-knowledge-base-with-synonyms",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Modify the order of synonyms.",
                "explanation": "The order of synonyms has no computational or API impact.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Remove any special characters from the call.",
                "explanation": "Special characters like '#' are prohibited in synonym definitions and cause API errors.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Remove question/answer pairs.",
                "explanation": "Pairs must exist for synonyms to be valid.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 262,
        "question": "You need to include a custom search app named App1 as a custom skill in Azure AI Search. Which @odata.type should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/search/cognitive-search-custom-skill-interface",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Microsoft.Skills.Custom.AmlSkill",
                "explanation": "AmlSkill is specifically for calling models hosted in Azure Machine Learning.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Microsoft.Skills.Custom.WebApiSkill",
                "explanation": "WebApiSkill is the correct type for extending a pipeline via a custom external HTTP endpoint.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Microsoft.Skills.Util.ConditionalSkill",
                "explanation": "ConditionalSkill is for branching logic within the skillset.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 263,
        "question": "Which three prebuilt models are available in Azure Document Intelligence? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/4-financial-id-tax-models",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "invoice",
                "explanation": "Invoice is a core prebuilt model in Document Intelligence.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "receipt",
                "explanation": "Receipt is a core prebuilt model for retail transactions.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "W-2",
                "explanation": "The W-2 tax form is supported by a prebuilt model.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "meeting minutes",
                "explanation": "Meeting minutes must be added as custom models.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "time sheets",
                "explanation": "Time sheets must be added as custom models.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 264,
        "question": "Your organization must automate structured data extraction from sensitive contracts while complying with privacy. Which two actions should you perform? (Choose two)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-general-document-read-layout-models/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Upload documents to Azure Blob Storage.",
                "explanation": "Blob storage provides secure and scalable accessibility for document processing.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Use the Layout model.",
                "explanation": "The Layout model is the correct tool for extracting structured data and key-value pairs from sensitive forms and contracts.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use the General Document model.",
                "explanation": "The General Document model is deprecated and not for new solutions.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Manually preprocess to remove PII.",
                "explanation": "Manual preprocessing is unnecessary as the service handles sensitive data securely via the managed cloud environment.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 265,
        "question": "You need to extract information from documents, images, video, and audio while minimizing development effort. What should you use?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Azure Content Understanding in Foundry Tools",
                "explanation": "Content Understanding is a multimodal service designed to extract information from diverse content types through unified APIs.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Document Intelligence",
                "explanation": "This service is primarily document-centric and lacks unified support for video/audio analysis.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure Machine Learning",
                "explanation": "Azure Machine Learning requires far more development and training effort than a prebuilt content service.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 266,
        "question": "You are identified fields from scanned invoices for financial recordkeeping. Which three actions should you take for optimal performance? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Ensure input files meet required specifications.",
                "explanation": "Proper resolution and format ensure high-quality extraction results.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Select the Invoice model.",
                "explanation": "The Invoice model is specifically trained for the fields required for recordkeeping.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Use text-based PDF files.",
                "explanation": "Text-embedded PDFs eliminate OCR character errors, optimizing the extraction accuracy.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Select the Business Card model.",
                "explanation": "Business card models are for contact extraction, not invoices.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "Use low-quality images.",
                "explanation": "Low quality reduces character recognition accuracy.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 267,
        "question": "You need to extract tables from document photos without model training. Which three methods can you use? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept-layout",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "a client library SDK",
                "explanation": "SDKs allow for programmatic extraction calling the layout model.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "a REST API",
                "explanation": "The REST API allows for direct programmatic data extraction calls.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "the Document Intelligence Studio",
                "explanation": "The Studio provides a no-code experience to run extraction interactively.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "a prebuilt model",
                "explanation": "A prebuilt model is the type of engine used, not the *method* of extraction.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 268,
        "question": "Which three prompt engineering strategies should you consider while testing a GPT application for company questions? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Be Descriptive",
                "explanation": "Using descriptive language improves the model's context understanding.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Be Specific",
                "explanation": "Specific instructions reduce vague interpretations by the model.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Order Matters",
                "explanation": "The sequence of information significantly impacts the reasoning of the output.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Be minimalistic",
                "explanation": "Minimalism can lack the context needed for complex organizational questions.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 269,
        "question": "How should you configure an Azure OpenAI app to retrieve relevant data efficiently from a large dataset?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/azure-openai-on-your-data/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Enable vector search.",
                "explanation": "Vector search uses semantic meaning to retrieve the most relevant context efficiently.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Increase chunk size.",
                "explanation": "Increasing chunk size impacts context but doesn't solve for efficient retrieval across a large set.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use keyword-based search.",
                "explanation": "Keyword search lacks the semantic efficiency needed for large datasets.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 270,
        "question": "When requesting image generation from the DALL-E 3 API, which property must be in the HTTP body?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#image-generation",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "the prompt",
                "explanation": "The prompt (image description) is the only mandatory property for the JSON request body.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "the API version",
                "explanation": "The API version is specified in the URL or header.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "the resource name",
                "explanation": "The resource name is used in the URL endpoint.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 271,
        "question": "What does the 'size' parameter indicate in a DALL-E image generation request?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-azure-openai-rest-api-to-consume-dall-e-models/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "the size of the images in pixel resolution",
                "explanation": "Size refers to dimensions like 1024x1024 pixels.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "the size in bytes",
                "explanation": "Size refers to resolution, not storage data weight.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "the number of responses",
                "explanation": "The 'n' parameter controls the count of images.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 272,
        "question": "You need to optimize an Azure Face app for images containing blurry faces. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/face/concepts/face-detection",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Set the detection model to detection_03.",
                "explanation": "The detection_03 model is specifically designed for improved accuracy on small and blurry faces.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Change the recognition model.",
                "explanation": "Recognition deals with matching; detection is what finds the face in the image first.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Decrease faceIdTimeToLive.",
                "explanation": "This affects cache duration, not detection quality.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 273,
        "question": "Which Azure Vision feature extracts text from scanned images of handwritten notes?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-ocr",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "optical character recognition (OCR)",
                "explanation": "OCR is the feature that recognizes and extracts text (both printed and handwritten) from images.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Image Analysis",
                "explanation": "Image Analysis gives captions but does not extract raw text strings.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Spatial Analysis",
                "explanation": "Spatial Analysis tracks movement in video feeds.",
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
                "correct": true,
                "answer": "Spatial Analysis",
                "explanation": "Spatial Analysis is specialized for detecting people presence and movements in physical environments using video.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "OCR",
                "explanation": "OCR reads text; it does not track person presence.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "face detection",
                "explanation": "Face detection is less effective for general 'presence' tracking compared to Spatial Analysis.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 275,
        "question": "You need to integrate an AI agent with tools that enable it to perform actions like scheduling meetings programmatically. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Add custom functions.",
                "explanation": "Adding custom functions (tools) enables the AI agent to dynamically execute specific actions programmatically.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Configure static templates.",
                "explanation": "Static templates cannot execute dynamic programmatic logic.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Enable default model capabilities.",
                "explanation": "Default capabilities are for reasoning and text generation, not for connecting to external business systems without tools.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 276,
        "question": "To ensure GPT-4 is available for inferencing via an endpoint, which three actions should you perform? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/explore-models-azure-ai-studio/3-deploy-model",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Deploy a GPT-4 model.",
                "explanation": "Deployment creates the operational endpoint for inference.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Provision a Microsoft Foundry resource.",
                "explanation": "The resource is the parent container needed to host deployments.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Select GPT-4 from the catalog.",
                "explanation": "You must pick the model from the catalog before you can initiate its deployment.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Set up a virtual machine.",
                "explanation": "Azure uses managed endpoints; manual VM setup is not part of this workflow.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 277,
        "question": "You need to configure an Azure OpenAI resource to filter out less-relevant documents using the 'Using your data' feature. Which parameter should you configure?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/use-your-data",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Strictness",
                "explanation": "The Strictness parameter sets the relevance threshold; higher values filter out documents that are weak matches.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Content data",
                "explanation": "This specifies the fields containing text content, not the filtering logic.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Retrieved documents",
                "explanation": "This controls the count, not the relevance quality check.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 278,
        "question": "You need to configure an application connected to Azure AI Search to retrieve relevant data by interpreting the meaning behind query terms. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/make-your-data-searchable/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Enable semantic search.",
                "explanation": "Semantic search enhances precision by understanding the meaning behind query terms rather than just literal keyword matching.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Use keyword search.",
                "explanation": "Keyword search lacks semantic capabilities for understanding intent.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Increase chunk size.",
                "explanation": "Chunk size affects context length but doesn't enable semantic retrieval logic.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 279,
        "question": "You are building an app to detect when all the spaces in a parking lot are empty. Which Custom Vision feature should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "object detection",
                "explanation": "Object detection returns bounding box coordinates, allowing you to track and identify individual parking spots.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "image classification",
                "explanation": "Classification identifies the whole image (e.g., 'full lot') but cannot pinpoint specific empty spots by location.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "image description",
                "explanation": "Description generates text which is not structured for this automated monitoring logic.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 280,
        "question": "You need to define search index field attributes where results will include a hit count by category. Which attribute should you assign?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "facetable",
                "explanation": "The facetable attribute allows for category hit counts to be generated and presented in search results.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "filterable",
                "explanation": "Filterable is for narrowing down results ($filter), not for counting them by category.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "key",
                "explanation": "Key is the unique document ID.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 281,
        "question": "You need to save normalized binary image files as projections in Azure AI Search. Which projection type should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "files",
                "explanation": "The files projection type is used specifically for saving binary content like images identified during enrichment.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "objects",
                "explanation": "Object projections save structured JSON data, not binary files.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "tables",
                "explanation": "Table projections map data to Azure Table rows/columns.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 282,
        "question": "You have a document with one positive sentence and multiple neutral sentences. Which document sentiment label will Azure Language return?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "positive",
                "explanation": "In Azure Language, if a document contains at least one positive sentence and the rest are neutral, the overall label is positive.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "neutral",
                "explanation": "The presence of a positive sentence overrides a purely neutral document score.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "mixed",
                "explanation": "Mixed requires both positive and negative sentences.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 283,
        "question": "Which three features are available in the Azure Translator service? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Detect language",
                "explanation": "Translator includes automatic source language identification.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Dictionary lookup",
                "explanation": "This provides context-aware alternate translations for specific terms.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Transliterate",
                "explanation": "This converts text from one script to another within the same language.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Intent recognition",
                "explanation": "Intent recognition is a feature of CLU, not Translator.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 284,
        "question": "Which storage solution for batch transcription minimize development effort?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Azure Storage",
                "explanation": "Azure Storage (Blob Containers) is the primary native storage provider supported by default for batch speech transcription.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Cosmos DB",
                "explanation": "Cosmos DB is not the native ingestion source for batch transcription.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure SQL Database",
                "explanation": "SQL databases are for structured data, not for binary audio ingestion for the speech service.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 285,
        "question": "Which two operations can you perform in a Language service orchestration workflow? (Choose two)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-language-understanding-model/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Connect to Language Understanding apps in the same resource.",
                "explanation": "Orchestration workflows are designed to coordinate multiple CLU or legacy LUIS apps under a single resource.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Connect to question answering projects in the same resource.",
                "explanation": "Workflows can route intents to Question Answering projects for informational lookup.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Add entities to your orchestration workflow directly.",
                "explanation": "You do not define or label entities within an orchestration project itself.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 286,
        "question": "You need to ensure uploaded images do not contain adult content while minimizing development effort. Which service should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Azure Vision Image Analysis",
                "explanation": "Image Analysis includes pre-trained features to detect and score adult content with zero custom training required.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Face service",
                "explanation": "Face service is for biometrics, not broad content safety analysis.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure AI Custom Vision",
                "explanation": "This would require high effort to manually collect and label a custom safety dataset.",
                "source": "Sample Test"
            }
        ]
    }
]
