const questionPool = [
    {
        "id": 210,
        "question": "You have an Azure OpenAI in Foundry Models solution. The solution uses a specific GPT-3.5-Turbo model version that was current during initial deployment. Auto-update is disabled. Sometime later, you discover that it uses a newer version of the model. Why was the model version updated?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Auto-update is always enabled.",
                "explanation": "This is incorrect. Auto-update can be disabled to allow manual control, but retirement dates override this setting.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Auto-update is enabled automatically when a new version is released.",
                "explanation": "New versions do not trigger an automatic update if auto-update is disabled, unless the specific version reaches the end of its life.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Model versions are updated automatically when the version is older than five version updates.",
                "explanation": "There is no five-version update rule; updates are strictly tied to manual intervention or retirement schedules.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "The model version reached its retirement date.",
                "explanation": "When a specific model version reaches its retirement date, the model will upgrade to the default version automatically to ensure continued service.",
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
                "explanation": "Azure AI Search focuses on information retrieval and indexing, not on generating images from text.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "DALL-E",
                "explanation": "DALL-E is specifically designed for creating visual content from natural language text descriptions.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "GPT-4",
                "explanation": "GPT-4 is a text-based model optimized for complex reasoning and generating text, not images.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Text Embedding Models",
                "explanation": "Embedding models are used to convert text into numerical vectors for similarity search and cannot generate visual content.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 212,
        "question": "Your company is developing a chatbot using an Azure OpenAI in Foundry Models service to provide answers based on the company\'s internal knowledge base. You need to improve the chatbot\'s ability to retrieve and process information from the knowledge base. Which two actions should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/3-azure-ai-services",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Index the knowledge base with AI Search.",
                "explanation": "Indexing creates a searchable structure, allowing the chatbot to efficiently retrieve relevant data chunks to ground the model\'s responses.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Integrate the Embeddings API.",
                "explanation": "The Embeddings API enables semantic search, which helps the bot understand the intent of a query and retrieve the most relevant context.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Train a custom language model.",
                "explanation": "Training a custom model (fine-tuning) is unnecessary for retrieval tasks where pre-trained models like GPT-4 perform effectively when provided with context.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use AI Vision for document analysis.",
                "explanation": "AI Vision is used for image analysis (like OCR) but is not the tool for conversational retrieval from a text-based knowledge base.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 213,
        "question": "You are building a web app that will generate images based on user prompts. The app will use the DALL-E 3 Azure OpenAI model. You need to ensure that HTTP requests against the Azure OpenAI API successfully generate images. Which three HTTP header properties should you include?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/reference",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "the API version used in this operation",
                "explanation": "The api-version is a required parameter in the request to ensure the API processes the call using the correct schema.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "the name of the Azure OpenAI service resource",
                "explanation": "The resource name is required to identify the specific service instance being targeted.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "the name of the DALL-E 3 model deployment",
                "explanation": "The deployment name is a necessary header/URL component to identify which model instance should generate the image.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "the quality of the generated images",
                "explanation": "This property belongs in the JSON request body, not in the HTTP headers.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "the style of the generated images",
                "explanation": "Style parameters (vivid or natural) are specified in the request body.",
                "source": "Sample Test"
            },
            {
                "id": 6,
                "correct": false,
                "answer": "the user\'s prompt",
                "explanation": "The user prompt is the core data of the request and is included in the body payload.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 214,
        "question": "Your organization plans to implement a generative AI solution to assist customer success by summarizing complaints and questions. You need to ensure the model provides accurate summaries while reducing costs. What action should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Apply prompt engineering without external data sources.",
                "explanation": "Prompt engineering improves response format but cannot provide accurate summaries of specific company data that the model hasn\'t seen.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Deploy a model without grounding data and rely on pre-trained capabilities.",
                "explanation": "Relying purely on pre-trained knowledge often leads to hallucinations when dealing with proprietary or specific customer data.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Fine-tune a model using customer query data without an orchestration layer.",
                "explanation": "Fine-tuning is significantly more expensive and less flexible for frequently updated datasets than RAG.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Use Retrieval-Augmented Generation (RAG) with Azure AI Search for grounding data.",
                "explanation": "RAG with AI Search is the most cost-effective way to ground the model in real-world data, ensuring accurate and relevant summaries.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 215,
        "question": "Your company uses an Azure OpenAI Foundry Models service to generate code snippets. You need to ensure the generated code adheres to your organization\'s coding standards. What action should you take to achieve this?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Enable multi-region deployment.",
                "explanation": "This affects availability and reliability, but does not influence the content or style of the code output.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Increase compute resources.",
                "explanation": "Increasing compute improves processing speed but has no effect on adherence to specific standards.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Provide standard-compliant examples in prompts.",
                "explanation": "Few-shot prompting (providing examples) is the most effective way to guide an LLM to follow specific stylistic and structural rules.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Switch to a chat-optimized model.",
                "explanation": "A chat-optimized model improves interaction flow but doesn\'t automatically know your proprietary coding standards.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 216,
        "question": "You are deploying a generative AI solution to process customer feedback. You need to optimize the solution for performance and ensure its responses align with the organization\'s tone and style. Which three actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/fine-tune-model-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Deploy the model on edge devices.",
                "explanation": "Edge deployment handles latency and connectivity but is not a strategy for tone alignment or performance optimization for reasoning.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Enable support for multiple languages.",
                "explanation": "Multi-language support expands reach but doesn\'t address tone alignment or core performance optimization.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Fine-tune the model with customer feedback data.",
                "explanation": "Fine-tuning customizes the model to match specific organizational tones and styles by training on actual feedback data.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Set up monitoring in Azure to track response accuracy and resource usage.",
                "explanation": "Continuous monitoring is necessary to evaluate the model\'s performance and ensure outputs remain accurate and within quota.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": true,
                "answer": "Use prompt engineering to refine the model\'s output.",
                "explanation": "Prompt engineering helps refine responses through structured inputs, enhancing the quality and relevance of the content.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 217,
        "question": "You use a text-generation model deployed in Microsoft Foundry. You need to reduce the randomness of the model\'s output to make its responses more predictable and consistent. Which parameter should you configure?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "max_tokens",
                "explanation": "This parameter only limits the length of the generated response.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "role",
                "explanation": "The role parameter defines the author of the message (e.g., system, user) in a chat API call.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "stop",
                "explanation": "The stop parameter identifies sequences that tell the model to halt generation.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "temperature",
                "explanation": "Temperature controls the randomness of the output. Lowering it makes the model more deterministic and focused.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 218,
        "question": "You have a generative AI application using a flow created in Microsoft Foundry. You plan to collect trace data, aggregate metrics, and user feedback with minimal administrative effort. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/flow-trace-feedback",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Add environment variables to the YAML file.",
                "explanation": "Environment variables do not natively enable tracing or feedback features in the portal.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Add properties to the YAML file of the deployment.",
                "explanation": "Configuration via UI settings is the path for minimal administrative effort in Foundry.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "From Deployment, configure the Application Insights diagnostics settings.",
                "explanation": "Foundry integrates with Application Insights to provide request tracing and feedback collection with minimal setup effort.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Modify the YAML file of the flow deployment.",
                "explanation": "YAML modification is more manual and prone to error compared to the native diagnostics settings toggle.",
                "source": "Sample Test"
            }
        ]
    },
    // {
    //     "id": 219,
    //     "question": "You are building an app that uses Azure Translator document translation. You need to improve the quality of the translation for user-uploaded documents. What should you ask the users to include when they upload a document?",
    //     "learningPath": "Sample Test",
    //     "module": "https://learn.microsoft.com/en-us/azure/ai-services/translator/document-translation/overview",
    //     "answers": [
    //         {
    //             "id": 1,
    //             "correct": false,
    //             "answer": "a summary",
    //             "explanation": "A summary doesn\'t help the model understand the linguistic nuances of the source text.",
    //             "source": "Sample Test"
    //         },
    //         {
    //             "id": 2,
    //             "correct": false,
    //             "answer": "the file format",
    //             "explanation": "The API detects the format; knowing it doesn\'t improve translation accuracy.",
    //             "source": "Sample Test"
    //         },
    //         {
    //             "id": 3,
    //             "correct": true,
    //             "answer": "the source language",
    //             "explanation": "Explicitly providing the source language allows the engine to skip detection and provide a more accurate translation result.",
    //             "source": "Sample Test"
    //         },
    //         {
    //             "id": 4,
    //             "correct": false,
    //             "answer": "the writing style",
    //             "explanation": "Writing style is not a standard parameter for improving core translation accuracy in the standard API.",
    //             "source": "Sample Test"
    //         }
    //     ]
    // },
    {
        "id": 220,
        "question": "You have an app that analyzes social media mentions but notice it misses granular feedback (positive/negative within a single sentence). What should you add to the API requests to fix this?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "loggingOptOut=true",
                "explanation": "This parameter is for privacy and does not change the depth of sentiment analysis.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "StringIndexType=TextElements_v8",
                "explanation": "This affects character offsets in the response, not the analysis logic.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "opinionMining=true",
                "explanation": "Setting opinionMining to true enables aspect-based sentiment analysis, providing the granular detail needed to identify sentiment for specific targets.",
                "source": "Sample Test"
            }
        ]
    }
]