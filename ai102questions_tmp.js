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
                "explanation": "Auto-update is not always enabled; it can be manually disabled to control model consistency.",
                "source": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Auto-update is enabled automatically when a new version is released.",
                "explanation": "New releases do not force an update if auto-update is disabled, unless the specific version reaches retirement.",
                "source": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Model versions are updated automatically when the version is older than five version updates.",
                "explanation": "There is no five-version update rule; updates are tied to retirement dates.",
                "source": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "The model version reached its retirement date.",
                "explanation": "When you select a specific model version, it remains until you manually update it or it reaches its retirement date, at which point it upgrades to the default version automatically.",
                "source": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models"
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
                "explanation": "DALL-E is specifically designed for creating visual content from text descriptions.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "GPT-4",
                "explanation": "GPT-4 is optimized for text-based tasks and lacks the capability to generate images.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Text Embedding Models",
                "explanation": "Text Embedding Models are intended for vectorization tasks, not visual content creation.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 212,
        "question": "Your company is developing a chatbot using an Azure OpenAI service to provide answers based on internal knowledge. You need to improve the chatbot\'s ability to retrieve and process information. Which two actions should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/3-azure-ai-services",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Index the knowledge base with AI Search.",
                "explanation": "Indexing with AI Search creates a searchable index, allowing the chatbot to efficiently retrieve relevant information.",
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
                "explanation": "Training a custom model is unnecessary because pre-trained models like GPT-4 are already optimized for this task.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use AI Vision for document analysis.",
                "explanation": "AI Vision is designed for image analysis rather than processing textual knowledge base documents.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 213,
        "question": "You are building a web app that will generate images based on user prompts using DALL-E 3. Which three HTTP header properties should you include to ensure successful requests?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/reference",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "the API version used in this operation",
                "explanation": "The API version is a required property for valid HTTP requests against the Azure OpenAI API.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "the name of the Azure OpenAI service resource",
                "explanation": "The resource name is necessary for the API to route the request to the correct service instance.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "the name of the DALL-E 3 model deployment",
                "explanation": "The model deployment name is required to specify which instance of DALL-E 3 should process the prompt.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "the user\'s prompt",
                "explanation": "The prompt is included in the HTTP body, not the header.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 214,
        "question": "Your organization plans to implement a generative AI solution to summarize customer complaints. You need to ensure accurate summaries while reducing costs. What action should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Apply prompt engineering without external data sources.",
                "explanation": "Prompt engineering alone does not address the need for domain-specific grounding data.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Fine-tune a model using customer query data without an orchestration layer.",
                "explanation": "Fine-tuning without an orchestration layer is significantly more expensive and fails to integrate real-time contextual data.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Use Retrieval-Augmented Generation (RAG) with Azure AI Search for grounding data.",
                "explanation": "RAG with AI Search ensures contextually relevant and accurate summaries by incorporating domain-specific data effectively and at a lower cost.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Deploy a model without grounding data and rely on pre-trained capabilities.",
                "explanation": "Relying solely on pre-trained capabilities results in less accurate outputs for domain-specific tasks.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 215,
        "question": "Your company uses Azure OpenAI to generate code snippets. You need to ensure the generated code adheres to your organization\'s coding standards. What action should you take?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Enable multi-region deployment.",
                "explanation": "Multi-region deployment impacts availability, not the adherence to coding standards.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Increase compute resources.",
                "explanation": "Compute resources affect speed but do not influence the model\'s output style or standards.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Provide standard-compliant examples in prompts.",
                "explanation": "Providing examples of compliant code in the prompts guides the AI to follow those standards in its output.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Switch to a chat-optimized model.",
                "explanation": "Chat-optimized models are for interaction flow, not specifically for improving adherence to coding standards.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 216,
        "question": "You are deploying a generative AI solution to process customer feedback. You need to optimize performance and ensure responses align with organizational tone and style. Which three actions should you perform?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/fine-tune-model-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Fine-tune the model with customer feedback data.",
                "explanation": "Fine-tuning customizes the solution to meet specific requirements like tone and style.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Set up monitoring in Azure to track response accuracy and resource usage.",
                "explanation": "Monitoring is essential to evaluate the model\'s ongoing performance and efficiency.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Use prompt engineering to refine the model\'s output.",
                "explanation": "Prompt engineering refines responses by structuring inputs effectively, enhancing the quality of content.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Deploy the model on edge devices.",
                "explanation": "Edge deployment addresses connectivity and local latency but not organizational style alignment.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 217,
        "question": "You need to reduce the randomness of a text-generation model\'s output to make its responses more predictable and consistent. Which parameter should you configure?",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "max_tokens",
                "explanation": "The max_tokens parameter only limits the length of the response, not its creativity or randomness.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "stop",
                "explanation": "The stop parameter specifies sequences that halt generation but does not influence randomness.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "temperature",
                "explanation": "Temperature directly controls the randomness and creativity of the output. Lower values make responses more focused and deterministic.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "role",
                "explanation": "The role parameter defines the author of the message in a chat interaction.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 218,
        "question": "You need to enable tracing and collect feedback for a generative AI deployment in Microsoft Foundry while minimizing administrative effort. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/flow-trace-feedback",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Add environment variables to the YAML file.",
                "explanation": "Environment variables do not natively activate the tracing and feedback collection features.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "From Deployment, configure the Application Insights diagnostics settings.",
                "explanation": "Microsoft Foundry integrates directly with Application Insights at the deployment level to enable tracing and feedback natively.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Modify the YAML file of the flow deployment.",
                "explanation": "Modifying the flow YAML affects orchestration logic rather than deployment-level telemetry.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Add properties to the YAML file of the deployment.",
                "explanation": "Configuring through the portal\'s diagnostic settings is the intended low-effort way to manage telemetry.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 219,
        "question": "You are building an app that uses Azure Translator. You need to improve the quality of the translation for user-uploaded documents. What should you ask users to include?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/translator/document-translation/overview",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "a summary",
                "explanation": "Providing a summary does not help the model translate the original text more accurately.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "the file format",
                "explanation": "The service detects the format; knowing it doesn\'t inherently improve linguistic accuracy.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "the source language",
                "explanation": "Explicitly specifying the source language is recommended to help the service provide a better translation than automatic detection might achieve alone.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "the writing style",
                "explanation": "Writing style is not a standard metadata field used to improve core translation accuracy in the API request.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 220,
        "question": "You have an app that determines whether comments are positive or negative, but it is missing granularity in customer feedback. What should you add to the API requests to fix this?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/language-service/sentiment-opinion-mining/overview",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "loggingOptOut=true",
                "explanation": "This opts out of logging and has no effect on analysis granularity.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "StringIndexType=TextElements_v8",
                "explanation": "This affects returned offset and length values rather than sentiment depth.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "opinionMining=true",
                "explanation": "Setting opinionMining to true adds aspect-based sentiment analysis, returning granular positive and negative details for specific targets in a sentence.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "multiLanguage=true",
                "explanation": "Multilanguage detection helps with language identification, not sentiment granularity.",
                "source": "Sample Test"
            }
        ]
    }
]