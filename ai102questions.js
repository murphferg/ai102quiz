const questionPool = [
    {
        "id": 1,
        "question": "Which parameter in Azure OpenAI controls the randomness of the model's output, where a lower value makes the output more deterministic?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Top P",
                "explanation": "Top P is similar to temperature but works by selecting a percentage of the probability mass; it's not the primary control for randomness in the same way Temperature is.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Temperature",
                "explanation": "Temperature is the primary parameter used to control randomness. Lowering it makes the model more predictable and focused.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Max Tokens",
                "explanation": "Max Tokens limits the length of the response but does not affect the randomness of the content generated.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Frequency Penalty",
                "explanation": "Frequency Penalty reduces the likelihood of the model repeating the same words, but it doesn't control overall randomness.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
    {
        "id": 2,
        "question": "You want to use a model that is best suited for complex reasoning and generating creative text. Which model family should you choose?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "DALL-E",
                "explanation": "DALL-E is used for image generation, not text reasoning or creative writing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Whisper",
                "explanation": "Whisper is a speech-to-text model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "GPT-4",
                "explanation": "GPT-4 (and GPT-4o) are the most advanced models for complex reasoning and high-quality text generation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Embeddings",
                "explanation": "Embedding models convert text into numerical vectors for search and comparison, they do not generate text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            }
        ]
    },
    {
        "id": 3,
        "question": "In a RAG (Retrieval-Augmented Generation) pattern, which service is typically used to store and retrieve the data chunks as vectors?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure SQL Database",
                "explanation": "While SQL can store data, it is not the optimized service for vector search in the standard AI-102 RAG pattern.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Blob Storage",
                "explanation": "Blob storage stores the raw files, but it doesn't provide the search or retrieval capabilities required for RAG.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Azure AI Search",
                "explanation": "Azure AI Search is the core vector database used in Azure to retrieve relevant data chunks to ground the LLM.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Cosmos DB",
                "explanation": "Although Cosmos DB supports vectors, Azure AI Search is the primary service featured in the AI-102 training for RAG integration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            }
        ]
    },
    {
        "id": 4,
        "question": "Which prompt engineering technique involves providing the model with a few examples of the desired input/output format?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Zero-shot learning",
                "explanation": "Zero-shot learning provides no examples and expects the model to understand the task from instructions alone.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Few-shot learning",
                "explanation": "Few-shot learning involves providing a small number of examples to guide the model's behavior.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Chain-of-thought prompting",
                "explanation": "Chain-of-thought asks the model to 'think step by step' but doesn't necessarily require input/output examples.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/3-advanced-techniques"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "System Message configuration",
                "explanation": "System messages set the overall behavior or persona but aren't defined as 'few-shot' based on examples alone.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            }
        ]
    },
    {
        "id": 5,
        "question": "You are monitoring an Azure OpenAI deployment and notice a 429 error code. What does this indicate?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Authentication failure",
                "explanation": "Authentication failures usually return a 401 (Unauthorized) code.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "The model is unavailable in the region",
                "explanation": "Regional unavailability or resource issues usually return 404 or 503 errors.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Rate limit exceeded (Tokens per Minute or Requests per Minute)",
                "explanation": "Error 429 means 'Too Many Requests,' indicating the deployment has hit its Quota limits.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The input text was blocked by content filters",
                "explanation": "Content filter triggers typically return a 400 (Bad Request) with details about the policy violation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
    {
        "id": 6,
        "question": "Which 'Meta-Prompt' component is used to define the boundaries and persona of the model, such as 'You are a helpful assistant that only answers in Markdown'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "User Message",
                "explanation": "The User Message is the specific question or instruction from the end user.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "System Message",
                "explanation": "The System Message (or System Prompt) defines the context, instructions, and constraints for the model's behavior.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Assistant Message",
                "explanation": "The Assistant Message is the response generated by the model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Grounding Data",
                "explanation": "Grounding data provides the facts for the model to use, but the System Message defines the persona.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            }
        ]
    },
    {
        "id": 7,
        "question": "You need to evaluate how closely an LLM's generated answer matches the ground truth in your test dataset. Which metric should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Groundedness",
                "explanation": "Groundedness measures if the answer is derived solely from the provided source context, not necessarily how it matches a ground truth answer.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/3-manual-automated-evaluations"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Similarity",
                "explanation": "Similarity (often GPT-assisted) measures how semantically close the generated response is to the reference 'gold' answer.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/3-manual-automated-evaluations"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Coherence",
                "explanation": "Coherence measures how well the response flows and is understandable, not its factual accuracy against a reference.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/3-manual-automated-evaluations"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Fluency",
                "explanation": "Fluency measures grammatical correctness and natural phrasing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/3-manual-automated-evaluations"
            }
        ]
    },
    {
        "id": 8,
        "question": "What is the primary benefit of using Prompt Flow in Azure AI Foundry?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It reduces the cost of tokens by 50%.",
                "explanation": "Prompt Flow does not directly reduce token costs; it is a development orchestration tool.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/2-understand-prompt-flow"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It streamlines the development, testing, and deployment of LLM-based applications.",
                "explanation": "Prompt Flow provides a structured way to link LLMs, Python code, and tools into a workflow for better iteration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/2-understand-prompt-flow"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It allows models to run without an internet connection.",
                "explanation": "Prompt Flow is a cloud-based service (though it can run in local containers, it still generally targets cloud deployment).",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/2-understand-prompt-flow"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It automatically fine-tunes models every time a flow is run.",
                "explanation": "Fine-tuning is a separate process from running a flow.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/2-understand-prompt-flow"
            }
        ]
    },
    {
        "id": 9,
        "question": "Which tool in Azure AI Foundry would you use to browse and deploy models like Llama, Mistral, and GPT-4?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Data explorer",
                "explanation": "Data explorer is for managing datasets.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Model Catalog",
                "explanation": "The Model Catalog is the central hub for discovering and deploying both frontier and open-source models.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Compute instance",
                "explanation": "A compute instance provides the processing power but is not the interface for browsing models.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Prompt Flow",
                "explanation": "Prompt Flow is for building workflows using models that are already deployed.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            }
        ]
    },
    {
        "id": 10,
        "question": "Which Azure AI Content Safety feature allows you to detect if a user is trying to trick the AI into bypassing its safety rules?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Hate speech detection",
                "explanation": "Hate speech detection identifies offensive language toward groups.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Jailbreak Detection",
                "explanation": "Jailbreak detection identifies 'prompt injection' attacks where users try to override the system instructions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "PII Detection",
                "explanation": "PII detection finds personally identifiable information.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Groundedness check",
                "explanation": "Groundedness checks for hallucinations against source data, not safety bypass attempts.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            }
        ]
    },
    {
        "id": 11,
        "question": "Which security method is recommended for production environments to allow an Azure Web App to access Azure OpenAI without storing API keys in the application code?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Secondary API Key",
                "explanation": "Secondary keys still require manual management and storage within the application environment.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Managed Identity and RBAC",
                "explanation": "Managed Identities eliminate the need for developers to manage credentials, using Microsoft Entra ID for authentication.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Shared Access Signature (SAS)",
                "explanation": "SAS tokens are primarily used for Azure Storage, not Azure OpenAI authentication.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Basic Authentication",
                "explanation": "Azure AI services do not support standard username/password basic authentication.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
    {
        "id": 12,
        "question": "Approximately how many characters represent a single 'token' in the context of Azure OpenAI models?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "1 character",
                "explanation": "Tokens are usually larger than a single character for common words.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "4 characters",
                "explanation": "A helpful rule of thumb is that 1 token is roughly equivalent to 4 characters of text in English.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "10 characters",
                "explanation": "10 characters is typically more than one token unless the word is very long.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "1 entire word",
                "explanation": "While common words are one token, complex words or punctuation may be split into multiple tokens.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
    {
        "id": 13,
        "question": "When using the Chat Completions API, which role should you use to provide the model with initial instructions on how to behave?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "user",
                "explanation": "The user role represents the messages sent by the end user.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "assistant",
                "explanation": "The assistant role represents previous responses from the model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "system",
                "explanation": "The system role is used to define the persona, boundaries, and instructions for the model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "admin",
                "explanation": "There is no 'admin' role in the Chat Completions API standard.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            }
        ]
    },
    {
        "id": 14,
        "question": "Which specific model type is required to perform semantic search or to measure the relatedness of text strings?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "GPT-3.5-Turbo",
                "explanation": "GPT models are for generation, not specifically for producing dense vector embeddings for comparison.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Embeddings (e.g., text-embedding-3-small)",
                "explanation": "Embedding models convert text into numerical vectors that represent semantic meaning for search use cases.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "DALL-E 3",
                "explanation": "DALL-E is for generating images from text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Whisper",
                "explanation": "Whisper is for speech-to-text transcription.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            }
        ]
    },
    {
        "id": 15,
        "question": "In the DALL-E API, which parameter determines the sharpness and detail of the generated image?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "quality (standard or hd)",
                "explanation": "The 'quality' parameter allows you to choose between 'standard' and 'hd' (high definition) for images.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "resolution_level",
                "explanation": "There is no parameter named 'resolution_level' in the DALL-E 3 API; use 'size' or 'quality'.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Temperature",
                "explanation": "Temperature is used for text generation models, not image generation in DALL-E.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Style",
                "explanation": "The 'style' parameter (vivid or natural) affects artistic direction, not technical sharpness/detail level.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
    {
        "id": 16,
        "question": "What is the result of 'Function Calling' in Azure OpenAI?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The model automatically executes a Python script on your server.",
                "explanation": "The model does not execute code; it provides the structured data for your app to execute code.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/3-advanced-techniques"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The model generates a JSON object containing arguments to call a function.",
                "explanation": "Function calling enables the model to output structured JSON that describes how to call a specific external tool.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/3-advanced-techniques"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The model searches the internet to find a function's code.",
                "explanation": "Function calling relies on function definitions provided by the developer in the prompt.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/3-advanced-techniques"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The model translates a function from C# to Python.",
                "explanation": "While models can translate code, 'Function Calling' is a specific API feature for structured tool use.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/3-advanced-techniques"
            }
        ]
    },
    {
        "id": 17,
        "question": "Azure AI Content Safety uses four severity levels for filtering content. Which of the following is NOT one of those levels?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Safe",
                "explanation": "Safe is one of the four severity levels used in content safety.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Critical",
                "explanation": "The severity levels are Safe, Low, Medium, and High. 'Critical' is not a standard level in the Azure AI Content Safety service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Low",
                "explanation": "Low is a valid severity level.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "High",
                "explanation": "High is a valid severity level.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            }
        ]
    },
    {
        "id": 18,
        "question": "In a RAG solution, if your retrieved document chunks are too large, what is the most likely negative outcome?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The model will lose its ability to understand the user's intent.",
                "explanation": "Large chunks do not affect intent recognition, which happens before retrieval.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The context window limit may be exceeded or exceeded too quickly.",
                "explanation": "Large chunks consume more tokens, potentially pushing the total prompt length past the model's maximum context limit.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The model will hallucinate more frequently.",
                "explanation": "Actually, larger chunks often provide more context, which can *reduce* hallucinations, though at the cost of token space.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The storage cost of the search index will triple.",
                "explanation": "Chunk size affects memory during processing more than physical storage costs in the index.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            }
        ]
    },
    {
        "id": 19,
        "question": "A customer requires predictable latency and a high volume of requests for their Azure OpenAI deployment. Which deployment type should they choose?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Standard (Pay-as-you-go)",
                "explanation": "Standard deployments share resources and may experience variable latency during peak times.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/3-deploy-models"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Provisioned Throughput (PTU)",
                "explanation": "PTU provides dedicated capacity with a fixed number of tokens per minute, ensuring predictable latency.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/3-deploy-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Serverless API",
                "explanation": "Serverless APIs are typically consumption-based and do not guarantee dedicated throughput in the same way PTUs do.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/3-deploy-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Local Gateway",
                "explanation": "A local gateway is for managing traffic, not for provisioning dedicated model throughput.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/3-deploy-models"
            }
        ]
    },
    {
        "id": 20,
        "question": "Which prompt engineering technique involves telling the model exactly what it should NOT do (e.g., 'Do not mention competitors')?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Positive reinforcement",
                "explanation": "Positive reinforcement focuses on desired behaviors, not restrictions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Negative constraints",
                "explanation": "Negative constraints explicitly list forbidden actions or topics to refine model behavior.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Few-shot prompting",
                "explanation": "Few-shot prompting provides examples but is not defined by its use of restrictions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Chain of thought",
                "explanation": "Chain of thought asks the model to reason through a problem, which is distinct from setting constraints.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/3-advanced-techniques"
            }
        ]
    },
    {
        "id": 21,
        "question": "Why is 'Chunking' necessary when preparing unstructured PDF data for a RAG-based search index?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "To ensure relevant segments fit within the model's token limit and are semantically focused.",
                "explanation": "Large documents must be split into smaller, manageable pieces to allow for precise retrieval and compliance with context window limits.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "To encrypt the data before it is sent to the cloud.",
                "explanation": "Chunking is for structural organization, not security or encryption.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To translate the PDF into different languages.",
                "explanation": "Chunking does not involve translation logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To remove images from the document.",
                "explanation": "Chunking is about text segmenting; image removal is an OCR/Preprocessing step.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            }
        ]
    },
    {
        "id": 22,
        "question": "In the Azure AI Foundry structure, what is the relationship between a 'Hub' and a 'Project'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "A Project can contain multiple Hubs.",
                "explanation": "This is incorrect; the Hub is the parent container for security and resource sharing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A Hub is a resource that can host multiple Projects and share security/connections.",
                "explanation": "The Hub acts as a governance boundary that allows multiple projects to share compute and data connections.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Hubs are for storage, and Projects are for compute.",
                "explanation": "Both Hubs and Projects are management layers for both storage and compute.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "They are the same thing and the names are interchangeable.",
                "explanation": "They have a hierarchical relationship; they are not interchangeable.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            }
        ]
    },
    {
        "id": 23,
        "question": "In Prompt Flow, which node type would you use to perform custom logic, like cleaning a text string, that is not available in the built-in LLM tool?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "LLM tool",
                "explanation": "The LLM tool is specifically for making calls to AI models.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/3-understand-components"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Python tool",
                "explanation": "The Python tool allows you to write custom code snippets to process data within the flow.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/3-understand-components"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Prompt tool",
                "explanation": "The Prompt tool is for designing the text templates sent to an LLM.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/3-understand-components"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Output node",
                "explanation": "The Output node defines the final result of the flow, not intermediate logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/3-understand-components"
            }
        ]
    },
    {
        "id": 24,
        "question": "Which evaluation method allows a developer to provide a 'Gold' answer for comparison to the model's output in Azure AI Foundry?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Ad-hoc testing",
                "explanation": "Ad-hoc testing is informal and doesn't usually involve comparison against a gold dataset.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/3-manual-automated-evaluations"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Automated evaluation using a test dataset",
                "explanation": "Automated evaluation workflows allow you to upload a dataset with ground truth (gold) answers to calculate metrics like similarity.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/3-manual-automated-evaluations"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Model fine-tuning",
                "explanation": "Fine-tuning is a training process, not an evaluation process.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/3-manual-automated-evaluations"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Throughput analysis",
                "explanation": "Throughput analysis measures performance speed, not accuracy against a reference.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-generative-ai-performance/3-manual-automated-evaluations"
            }
        ]
    },
    {
        "id": 25,
        "question": "Which Content Safety filter is designed to prevent the AI from generating text that verbatim matches protected intellectual property like lyrics or books?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Jailbreak Detection",
                "explanation": "Jailbreak detection focuses on malicious user instructions, not intellectual property protection.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Protected Material Detection",
                "explanation": "Protected Material Detection checks for known copyrighted content in the model's output.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Violence Filter",
                "explanation": "The violence filter targets harmful physical descriptions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Self-harm Detection",
                "explanation": "Self-harm detection identifies content related to personal injury.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            }
        ]
    },
    {
        "id": 26,
        "question": "How can you ensure that an application continues to work without interruption when a specific version of an Azure OpenAI model reaches its end of life?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Set the deployment to 'Auto-update to default'.",
                "explanation": "This setting allows Azure to automatically roll your deployment forward to the latest stable version of that model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/3-deploy-models"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Delete and recreate the resource daily.",
                "explanation": "This is inefficient and causes significant downtime.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/3-deploy-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Pin the application to a legacy version number.",
                "explanation": "Legacy versions eventually expire; pinning will lead to failure once the version is retired.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/3-deploy-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Change the API key every month.",
                "explanation": "API key rotation has nothing to do with model versioning lifecycle.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/3-deploy-models"
            }
        ]
    },
    {
        "id": 27,
        "question": "You are looking for the GPT-4o model in the Model Catalog but it is not appearing for your specific region. What is the most likely reason?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "You need a higher billing tier.",
                "explanation": "Model availability is based on regional resource rollout, not billing tier.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "New models are rolled out to specific regions first based on hardware availability.",
                "explanation": "High-demand models like GPT-4o require specific GPU clusters that are not yet in every Azure region.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "You have too many projects in your Hub.",
                "explanation": "Project count does not restrict the visibility of models in the catalog.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The model is only available for offline use.",
                "explanation": "Azure OpenAI models are strictly cloud-based services.",
                "source": "https://learn.microsoft.com/en-us/training/modules/deploy-models-azure-ai-foundry/2-explore-model-catalog"
            }
        ]
    },
    {
        "id": 28,
        "question": "Which mathematical concept is most commonly used in RAG to calculate how similar a user's question is to a document stored in a vector database?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Standard Deviation",
                "explanation": "Standard deviation measures data spread, not semantic similarity.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Cosine Similarity",
                "explanation": "Cosine similarity measures the angle between two vectors, effectively determining semantic closeness.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Linear Regression",
                "explanation": "Linear regression is for predicting continuous values, not vector comparison.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Binary Search",
                "explanation": "Binary search is a sorting/search algorithm for ordered lists, not vector spaces.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            }
        ]
    },
    {
        "id": 29,
        "question": "What is the best way to prevent a model from making up answers (hallucinating) when it doesn't have the information in its context?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Increase the temperature to 1.0.",
                "explanation": "Higher temperature increases randomness, which typically *increases* hallucinations.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Instruct the model in the System Message to say 'I don't know' if the answer is not in the context.",
                "explanation": "Setting clear behavioral constraints in the System Message is a primary strategy for reducing hallucinations.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use a shorter prompt.",
                "explanation": "Shorter prompts provide less context and often make the model more likely to guess.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Remove all punctuation from the input.",
                "explanation": "Punctuation helps the model understand structure; removing it does not help with accuracy.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            }
        ]
    },
    {
        "id": 30,
        "question": "How does 'Semantic Ranking' improve the performance of a RAG system using Azure AI Search?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It makes the initial keyword search faster.",
                "explanation": "Semantic ranking is an additional step *after* initial search; it slightly increases latency to improve quality.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/4-exercise-rag"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It re-orders the top results based on semantic relevance to ensure the best context is passed to the LLM.",
                "explanation": "Semantic ranking uses advanced L2 models to ensure the most conceptually relevant chunks are at the top of the list provided to the generative model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/4-exercise-rag"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It compresses the vector index size.",
                "explanation": "Ranking does not affect index compression.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/4-exercise-rag"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It automatically translates search results into English.",
                "explanation": "Translation is a different service; semantic ranking is for relevance, not language conversion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/4-exercise-rag"
            }
        ]
    },
    {
        "id": 31,
        "question": "What is the primary user experience benefit of setting 'stream: true' in an Azure OpenAI API call?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It reduces the total cost of the request.",
                "explanation": "Streaming costs the same amount of tokens as a non-streamed request.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It reduces the perceived latency by showing text as it is being generated.",
                "explanation": "Streaming allows the UI to display characters immediately, preventing the user from waiting for the entire response to finish.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It allows for longer responses than the context window permits.",
                "explanation": "Streaming does not bypass the model's fundamental token limits.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It encrypts the text during transmission.",
                "explanation": "Text is already encrypted via TLS; streaming is about delivery timing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
    {
        "id": 32,
        "question": "In the Azure OpenAI 'On Your Data' feature, which index type is created by default when uploading files directly through the studio?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure SQL Index",
                "explanation": "Azure OpenAI Studio uses Azure AI Search as its standard backend.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/4-exercise-rag"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure AI Search Index",
                "explanation": "Azure AI Search is the primary integrated service for indexing local data for OpenAI grounding.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/4-exercise-rag"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Bing Search Index",
                "explanation": "Bing is used for web-grounding, not for private document indexing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/4-exercise-rag"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Local CSV Index",
                "explanation": "Data must be hosted in a searchable cloud index for the feature to work.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/4-exercise-rag"
            }
        ]
    },
    {
        "id": 33,
        "question": "You want to implement a solution where your search service can access your storage account without using access keys. What is the best solution?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Grant 'Public Access' to the storage account.",
                "explanation": "This is a major security risk and not recommended.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Enable a System-Assigned Managed Identity on the Search service.",
                "explanation": "Managed identities allow Azure services to authenticate to each other securely using Entra ID (RBAC).",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Hardcode the storage key in the Search Indexer configuration.",
                "explanation": "The requirement explicitly states not to use access keys.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use an FTP connection.",
                "explanation": "FTP is not a standard secure connection method between Azure Search and Storage.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
    {
        "id": 34,
        "question": "Which role in a chat completion history is used for messages that provide previous examples of AI responses?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "user",
                "explanation": "The user role is for inputs/questions from the person using the app.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "assistant",
                "explanation": "The assistant role is used to provide the model with examples of how it has (or should have) responded in the past.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "system",
                "explanation": "The system role is for high-level instructions, not specific dialogue history examples.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "example",
                "explanation": "While they *are* examples, the required API role is 'assistant'.",
                "source": "https://learn.microsoft.com/en-us/training/modules/apply-prompt-engineering-azure-openai/2-structure-prompts"
            }
        ]
    },
    {
        "id": 35,
        "question": "You have a dataset of company policies that change every week. Should you use fine-tuning or RAG to ensure the model has current information?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Fine-tuning, because it teaches the model the facts permanently.",
                "explanation": "Fine-tuning is slow and expensive for frequently changing data.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "RAG, because it retrieves the most current information at query time.",
                "explanation": "RAG is ideal for dynamic data because you can update the search index quickly without retraining the model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Both, as they provide redundant protection.",
                "explanation": "While possible, it is unnecessary and inefficient for weekly data changes.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Neither, you should use a simple database lookup.",
                "explanation": "Generative AI is still needed to summarize and present the policies in natural language.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            }
        ]
    },
    {
        "id": 36,
        "question": "Which of the six Microsoft Responsible AI principles emphasizes that AI systems should have explanations for their decisions and operations?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Fairness",
                "explanation": "Fairness is about treating all people equally.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Privacy and Security",
                "explanation": "Privacy is about data protection.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Transparency",
                "explanation": "Transparency ensures users understand how the AI works and that it is an AI they are interacting with.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Inclusiveness",
                "explanation": "Inclusiveness is about ensuring the system works for everyone regardless of ability.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            }
        ]
    },
    {
        "id": 37,
        "question": "In the Azure OpenAI pricing model, which type of token is typically more expensive?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Input tokens (Prompts)",
                "explanation": "Input tokens are generally priced lower than output tokens.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Output tokens (Completions)",
                "explanation": "Completion tokens require more compute power to generate, and are therefore priced at a higher rate per 1,000 tokens.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Cached tokens",
                "explanation": "Cached tokens (if available) are usually discounted compared to standard tokens.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "They cost exactly the same amount.",
                "explanation": "Model pricing tables distinguish between input and output costs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
    {
        "id": 38,
        "question": "Which deployment option allows you to host a finalized Prompt Flow as a scalable REST endpoint in Azure?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Export as Excel",
                "explanation": "Excel is for viewing data, not hosting an AI endpoint.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/5-deploy-monitor"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Deploy to an Online Endpoint",
                "explanation": "Azure AI Foundry allows you to deploy a flow directly to an online endpoint for real-time consumption.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/5-deploy-monitor"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Save as a System Prompt",
                "explanation": "Saving a prompt doesn't create a compute-hosting endpoint.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/5-deploy-monitor"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Copy to Clipboard",
                "explanation": "This is for moving code, not hosting a service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-prompt-flow/5-deploy-monitor"
            }
        ]
    },
    {
        "id": 39,
        "question": "When configuring an Azure AI Agent, what is the role of 'Instructions'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "They act like a System Message to define the agent's goal and behavior.",
                "explanation": "Instructions tell the agent what its task is and how it should interact with tools.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "They are the list of API keys for the agent.",
                "explanation": "Keys are handled in the 'Connections' settings.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "They are the raw data files the agent reads.",
                "explanation": "Data files are part of the 'Knowledge' or 'Files' component, not instructions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "They are the logs of agent activities.",
                "explanation": "Logs are for monitoring; instructions are for configuration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            }
        ]
    },
    {
        "id": 40,
        "question": "What is the correct sequence of events in a typical RAG-based chat request?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Answer -> Search -> Prompt -> Question",
                "explanation": "You cannot answer before you have a question and search results.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "User Question -> Search (Retrieval) -> Augmented Prompt -> LLM Generation",
                "explanation": "RAG starts with a query, retrieves data, adds that data to the prompt, and then has the LLM generate the answer.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "LLM Generation -> Search -> User Question",
                "explanation": "The model cannot generate based on a question it hasn't received yet.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Search -> LLM Generation -> User Question -> Answer",
                "explanation": "The search must be based on a specific user question to be effective.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-own-data-azure-openai/2-understand-rag"
            }
        ]
    },
    {
        "id": 41,
        "question": "Which specific property of an AI Agent determines the model's underlying behavior and the limits of its autonomy?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The Agent's Display Name",
                "explanation": "The display name is purely for organizational identification in the portal.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The Agent's Instructions",
                "explanation": "Instructions serve as the system prompt that guides how the agent processes requests and interacts with tools.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The Thread ID",
                "explanation": "The Thread ID tracks the history of a conversation, not the agent's core behavior configuration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The Project Connection",
                "explanation": "Project connections define access to other Azure services but do not define the agent's internal logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            }
        ]
    },
    {
        "id": 42,
        "question": "In Semantic Kernel, which tool would you use to automatically chain multiple plugins together based on a user's complex natural language goal?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The Connector",
                "explanation": "Connectors are used to bridge the kernel to specific AI models.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The Planner",
                "explanation": "Planners (such as the FunctionCallingStepwisePlanner) generate a step-by-step plan to resolve a goal using available plugins.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The Memory Store",
                "explanation": "Memory stores are used for vector retrieval and long-term context, not logic orchestration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The Kernel Syntax",
                "explanation": "Syntax refers to the coding structure, while the Planner is the specific functional component for orchestration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            }
        ]
    },
    {
        "id": 43,
        "question": "You are building a multi-agent system. Which design pattern allows one agent to effectively 'pass the baton' to another specialized agent when it cannot fulfill a request?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The Parallel Pattern",
                "explanation": "The parallel pattern runs agents at the same time, rather than handing off tasks in a sequence.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The Orchestrator or Router Pattern",
                "explanation": "An orchestrator agent determines the correct specialized agent for a sub-task and manages the hand-off.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The Recursive Pattern",
                "explanation": "Recursive patterns involve an agent checking its own work repeatedly.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The Static Pattern",
                "explanation": "This is not a recognized multi-agent orchestration pattern in Azure AI Foundry.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            }
        ]
    },
    {
        "id": 44,
        "question": "What is the primary function of the 'File Search' tool in the Azure AI Agent Service?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To search the live internet for news.",
                "explanation": "Web searching is handled by the Bing Search tool.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To perform RAG (Retrieval-Augmented Generation) on uploaded documents.",
                "explanation": "File Search allows the agent to index and retrieve specific information from private files like PDFs or Markdown documents.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To rename files in a user's OneDrive.",
                "explanation": "The tool is for retrieval and reasoning, not for managing file system metadata in OneDrive.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To execute Python scripts inside files.",
                "explanation": "Executing code is the responsibility of the Code Interpreter tool.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            }
        ]
    },
    {
        "id": 45,
        "question": "Which state does an agent's Run enter when the model needs to call a function defined in your application code?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "queued",
                "explanation": "The queued state means the Run is waiting for compute resources.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "in_progress",
                "explanation": "In_progress means the model is actively thinking or generating text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "requires_action",
                "explanation": "The requires_action state indicates that the client must execute a local tool and submit the output before the agent can continue.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "expired",
                "explanation": "The expired state means the Run took too long and timed out.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            }
        ]
    },
    {
        "id": 46,
        "question": "In the Azure AI Foundry workflow builder, what is the purpose of the 'Invoke Agent' node?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "To call a specific agent into the current workflow and pass it parameters.",
                "explanation": "The Invoke Agent node allows you to integrate pre-configured agents as modular blocks in a larger multi-agent workflow.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "To delete an agent's thread.",
                "explanation": "Thread management is typically handled via API calls, not an 'Invoke' node.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To train a new model from scratch.",
                "explanation": "Workflows orchestrate behavior, they don't perform base model training.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To change the subscription billing tier.",
                "explanation": "Billing is handled at the Azure resource level, not in the workflow canvas.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            }
        ]
    },
    {
        "id": 47,
        "question": "What happens when you enable the 'Code Interpreter' tool for an agent?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The agent can only speak in Python code.",
                "explanation": "The agent still speaks natural language but can use code for background tasks.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The agent can write and execute Python code in a sandboxed environment to solve math or data problems.",
                "explanation": "Code Interpreter provides a secure runtime where the agent can run its own scripts to generate charts, process files, and perform calculations.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The agent gain's access to the user's local terminal.",
                "explanation": "The environment is sandboxed on Azure servers, not the user's local machine.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The agent can debug JavaScript code on the web.",
                "explanation": "Code Interpreter specifically supports Python for its execution environment.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            }
        ]
    },
    {
        "id": 48,
        "question": "In Semantic Kernel, which object is used to maintain a consistent state of variables and data throughout a sequence of function calls?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "KernelArguments / Context",
                "explanation": "The KernelArguments object (or Context in older versions) stores the data that flows between different functions in the kernel.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "The Global Variable",
                "explanation": "Semantic Kernel uses encapsulated objects rather than global variables for better orchestration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The Plugin Registry",
                "explanation": "The registry stores function definitions, not the runtime data context.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The HTTP Client",
                "explanation": "The HTTP client handles network traffic, not conversation state.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            }
        ]
    },
    {
        "id": 49,
        "question": "Which multi-agent pattern uses a 'Manager' agent to assign tasks to multiple 'Worker' agents and then synthesize their results?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Sequential Pattern",
                "explanation": "Sequential is a simple chain; it doesn't necessarily involve a manager synthesizing multiple workers.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Manager-Worker Pattern",
                "explanation": "This pattern involves a lead agent that delegates work to specialized agents and then combines the findings into a final report.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Peer-to-Peer Pattern",
                "explanation": "In peer-to-peer, agents talk directly to each other without a central manager.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Ad-hoc Pattern",
                "explanation": "This is not a structured orchestration pattern mentioned in the training.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            }
        ]
    },
    {
        "id": 50,
        "question": "When defining a Semantic Function in Semantic Kernel, what is the purpose of the 'config.json' file?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To store the model weights.",
                "explanation": "Model weights are not stored in function configuration files.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To define the function's parameters, model settings (like temperature), and description.",
                "explanation": "The config file provides metadata that helps the kernel and planner understand how to use the prompt-based function.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To write the actual C# code for the function.",
                "explanation": "Semantic functions use prompt templates (skprompt.txt), not C# code in a JSON file.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To store the user's password.",
                "explanation": "Configuration files should never be used for storing sensitive security credentials.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins"
            }
        ]
    },
    {
        "id": 51,
        "question": "How does the Azure AI Agent Service handle large document attachments that exceed the model's context window?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It truncates the file and only reads the first 100 words.",
                "explanation": "Truncation would lead to poor accuracy; the service uses a better approach.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It automatically chunks and vectorizes the file using the 'File Search' tool for efficient retrieval.",
                "explanation": "By using a vector index, the agent only retrieves the most relevant snippets of the file that fit within the context window.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It sends the entire file to the model as a single prompt.",
                "explanation": "This would likely trigger a 'context window exceeded' error for large files.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It asks the user to summarize the file first.",
                "explanation": "The service is designed to automate this process for the user.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            }
        ]
    },
    {
        "id": 52,
        "question": "Which component is required to enable an agent to store 'Memories' in a persistent external database like Azure AI Search?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The Planner",
                "explanation": "Planners are for logic, not storage.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A Memory Connector",
                "explanation": "Memory connectors allow Semantic Kernel to talk to vector databases for long-term persistence of semantic data.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The Prompt Template",
                "explanation": "Templates define the message, but not where the data is stored.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The User ID",
                "explanation": "The User ID is for session tracking, not for configuring the storage backend.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            }
        ]
    },
    {
        "id": 53,
        "question": "In a multi-agent system, what is an 'Agent Group Chat' pattern?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "A chat room for Azure developers.",
                "explanation": "This refers to an AI architectural pattern, not human chat.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A collaboration pattern where multiple agents share a single conversation thread to collectively solve a problem.",
                "explanation": "Agents in a group chat see each other's outputs and build upon them until a solution is found.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "An agent that speaks in different voices.",
                "explanation": "This refers to the Speech service, not multi-agent collaboration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A way to reduce the number of agents used.",
                "explanation": "Group chats actually use multiple agents at once.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            }
        ]
    },
    {
        "id": 54,
        "question": "What is a primary risk of giving an AI Agent access to a 'Custom Tool' that can execute shell commands?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The agent might become too fast.",
                "explanation": "Speed is rarely the primary risk of shell access.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Malicious users could use prompt injection to trick the agent into executing harmful system commands.",
                "explanation": "Security documentation emphasizes the risk of 'remote code execution' vulnerabilities when agents are given powerful system-level tools.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The agent will use too many tokens.",
                "explanation": "Token count is a billing concern, but shell access is a fundamental security risk.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The agent will forget its display name.",
                "explanation": "Instruction following or identity is not the primary risk compared to system compromise.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            }
        ]
    },
    {
        "id": 55,
        "question": "In the Azure AI SDK for Python, which method is used to poll for the status of a Run until it is finished?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "agent.wait_for_message()",
                "explanation": "This is not a standard method in the SDK for polling runs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "client.agents.create_and_process_run() or polling client.agents.get_run()",
                "explanation": "Developers must either use a high-level helper or manually check the Run state until it reaches a terminal state like 'succeeded'.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "run.finish_now()",
                "explanation": "You cannot force a model to finish generating; you must wait for the service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "agent.execute_sync()",
                "explanation": "Most agent operations are asynchronous due to the time taken for reasoning and generation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            }
        ]
    },
    {
        "id": 56,
        "question": "Which tool in the Azure AI Foundry allows you to monitor the latency and token usage of your multi-agent workflows?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The Model Catalog",
                "explanation": "The catalog is for model selection, not performance monitoring.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Trace and Monitoring (Application Insights integration)",
                "explanation": "Azure AI Foundry integrates with Application Insights to provide deep traces of agent runs, including timing and token data.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The Content Filter",
                "explanation": "Content filters are for safety, not usage metrics.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The Billing Explorer",
                "explanation": "Billing Explorer shows cost but lacks the granular execution traces needed for debugging agent latency.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            }
        ]
    },
    {
        "id": 57,
        "question": "What is the primary benefit of using 'Auto-Function Calling' in Semantic Kernel?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It reduces the cost of using the model.",
                "explanation": "Auto-calling might actually increase costs by making multiple model turns.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It allows the kernel to handle the complex loop of requesting and submitting tool outputs automatically.",
                "explanation": "Auto-function calling removes the need for the developer to manually write the loop that detects function requests and sends back results.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It translates code into different languages.",
                "explanation": "It handles execution flow, not translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It prevents the model from hallucinating.",
                "explanation": "While tools provide facts that can reduce hallucinations, the feature itself is about automation of the call loop.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            }
        ]
    },
    {
        "id": 58,
        "question": "In a Multi-Agent system, what is the role of an 'Evaluation Agent'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To pay the Azure bill.",
                "explanation": "Agents do not handle financial payments.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To review the output of another agent against a set of quality or safety criteria.",
                "explanation": "Evaluation agents act as a quality control step in a workflow to ensure accuracy and policy compliance.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To search for images on Google.",
                "explanation": "Search is a retrieval task, not an evaluation task.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To compress data files.",
                "explanation": "Data compression is a utility task, not a reasoning-based evaluation task.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            }
        ]
    },
    {
        "id": 59,
        "question": "When configuring a 'File Search' tool, why might you adjust the 'top_k' parameter?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To increase the agent's IQ.",
                "explanation": "IQ is not a technical parameter in Azure AI.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To control the number of retrieved document snippets that are sent to the model context.",
                "explanation": "Adjusting top_k allows you to balance providing enough context versus overwhelming the model or using too many tokens.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To change the language of the files.",
                "explanation": "Language settings are handled elsewhere; top_k is a retrieval count.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To delete old files.",
                "explanation": "File deletion is a separate management operation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            }
        ]
    },
    {
        "id": 60,
        "question": "Which multi-agent pattern is best for a task that requires a back-and-forth debate between two agents to find the best solution?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Single-shot execution",
                "explanation": "Single-shot doesn't allow for the necessary iterative debate.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Multi-agent loop or debate pattern",
                "explanation": "Iterative loops allow agents to critique each other's work and refine their answers through multi-turn collaboration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Parallel processing",
                "explanation": "Parallel processing involves independent work, not collaborative debate.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Managed off-loading",
                "explanation": "Off-loading is about moving a task, not debating it.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            }
        ]
    },
    {
        "id": 61,
        "question": "When using Semantic Kernel, what is a 'Kernel Plugin' in simple terms?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "A collection of functions (skills) that are registered into the kernel for use by the model.",
                "explanation": "Plugins are the mechanism used to extend the kernel's capabilities with custom logic or tools.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "A browser extension for Azure.",
                "explanation": "Plugins are code components in an application, not browser extensions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A new AI model version.",
                "explanation": "Models are connected to the kernel via connectors; plugins are the tools the kernel uses.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A way to restart the Azure server.",
                "explanation": "Semantic Kernel is an orchestration framework, not a server management tool.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins"
            }
        ]
    },
    {
        "id": 62,
        "question": "Which file format is used to define an Agent Group Chat workflow in Azure AI Foundry?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "JSON only",
                "explanation": "While JSON is used in APIs, the workflow builder uses a more human-readable format for configuration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "YAML",
                "explanation": "Workflows and agent configurations in Azure AI Foundry are typically defined and exported as YAML files.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "CSV",
                "explanation": "CSV is for data tables, not structural logic configuration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "HTML",
                "explanation": "HTML is for the user interface; YAML is for the logic definition.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            }
        ]
    },
    {
        "id": 63,
        "question": "What is the primary role of 'Managed Identities' in an Azure AI Agent architecture?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To track the agent's name.",
                "explanation": "Identity refers to authentication, not display names.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To allow the agent service to authenticate to other Azure services without using hardcoded API keys.",
                "explanation": "Managed Identities use Microsoft Entra ID to securely manage access to resources like Azure AI Search or Blob Storage.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To encrypt the user's password.",
                "explanation": "Identity is for service-to-service access control, not client-side password encryption.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To create a fake user profile.",
                "explanation": "Managed identities are actual technical security principles in Azure.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            }
        ]
    },
    {
        "id": 64,
        "question": "You want your agent to handle simple repetitive tasks like 'Greeting' or 'Farewell' without calling the expensive LLM. What is the best strategy?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Always call the LLM and hope it is cheap.",
                "explanation": "This is not cost-efficient for production.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Use a Router node or simple code logic to intercept those specific intents and provide static responses.",
                "explanation": "Routing simple intents away from the LLM reduces both latency and token costs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Tell the model to work for free.",
                "explanation": "Models are billed based on token consumption and deployment capacity.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Only use the agent once a day.",
                "explanation": "Usage limits don't solve the problem of efficiency per-request.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            }
        ]
    },
    {
        "id": 65,
        "question": "Which parameter in an agent's configuration determines which specific model (e.g., gpt-4o) the agent uses?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The Service Connection",
                "explanation": "Connections define access to the OpenAI service, not the specific model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The Model Deployment Name",
                "explanation": "The agent must be linked to a specific model deployment to perform text generation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The Instruction ID",
                "explanation": "Instructions are text-based behavior prompts, not model selections.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The Region",
                "explanation": "Regions determine availability, but a deployment name is used to select the model instance.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            }
        ]
    },
    {
        "id": 66,
        "question": "What is the result of setting an agent's 'Temperature' to 0.0?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The agent stops working.",
                "explanation": "A temperature of 0.0 is a valid and commonly used setting.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The agent's output becomes highly deterministic and predictable.",
                "explanation": "Lower temperatures reduce randomness, ensuring the model chooses the most likely tokens every time.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The agent becomes more creative.",
                "explanation": "Higher temperatures (e.g., 0.8) increase creativity and randomness.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The agent runs faster.",
                "explanation": "Temperature affects token selection logic, but not necessarily the overall compute speed.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            }
        ]
    },
    {
        "id": 67,
        "question": "In a sequential multi-agent workflow, what happens if the first agent fails to provide a valid output?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "The workflow will typically fail or trigger an error handler, as the subsequent agents depend on that output.",
                "explanation": "Sequential workflows rely on a chain of dependencies; if one link fails, the entire process is compromised.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "The next agent will automatically invent the missing data.",
                "explanation": "Agents cannot magically invent data that was supposed to be provided by a previous step.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The workflow will restart from the beginning automatically.",
                "explanation": "Restart logic must be manually configured in the workflow definition.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The billing for that run is cancelled.",
                "explanation": "You are still billed for the tokens consumed up to the point of failure.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            }
        ]
    },
    {
        "id": 68,
        "question": "What is the 'FunctionCallingStepwisePlanner' in Semantic Kernel?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "A way to call functions in alphabetical order.",
                "explanation": "Order is determined by logic, not alphabetical naming.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A specialized planner that iteratively executes tools and evaluates the result before deciding on the next step.",
                "explanation": "Stepwise planners use a reasoning loop (like ReAct) to solve complex goals that require multiple tool interactions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A tool that only works with Azure SQL.",
                "explanation": "It works with any registered kernel plugin.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A way to slow down the model.",
                "explanation": "While it takes multiple turns, the goal is accuracy and capability, not intentionally slowing down the model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            }
        ]
    },
    {
        "id": 69,
        "question": "Which of these is a valid method to secure sensitive variables (like API keys) in a multi-agent workflow?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Hardcoding them in the YAML file.",
                "explanation": "Hardcoding is a security risk.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Using Azure Key Vault and referencing the secrets as environment variables or connections.",
                "explanation": "Key Vault is the enterprise standard for managing secrets in Azure.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Printing them in the console log.",
                "explanation": "Secrets should never be printed in plain text logs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Storing them in a public GitHub repo.",
                "explanation": "This is the most dangerous way to handle secrets.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/2-understand-orchestration"
            }
        ]
    },
    {
        "id": 70,
        "question": "In Semantic Kernel, what does a 'Connector' do?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It plugs the computer into the wall.",
                "explanation": "Connector refers to a software abstraction for model APIs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It provides a common interface for the kernel to interact with different AI model providers.",
                "explanation": "Connectors allow you to easily switch between Azure OpenAI, HuggingFace, or local models while keeping your application logic identical.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It connects two agents to each other.",
                "explanation": "Agent interaction is handled by the orchestrator, not the connector.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It translates JSON to XML.",
                "explanation": "Connectors are for AI model integration, not data format conversion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-kernel"
            }
        ]
    },
    {
        "id": 71,
        "question": "What is the primary function of a 'Parallel Execution' node in an Azure AI workflow?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To run agents one after another.",
                "explanation": "That is sequential execution.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To run multiple agent tasks simultaneously to save time.",
                "explanation": "Parallelization is used to speed up workflows where sub-tasks (like researching three different topics) can be done independently.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To duplicate the user's message.",
                "explanation": "Duplicates are not the purpose; work distribution is.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To decrease the token price.",
                "explanation": "Tokens are billed based on consumption; parallel runs still consume the same number of tokens.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            }
        ]
    },
    {
        "id": 72,
        "question": "Which specific agent tool would you use to let the AI calculate the Fibonacci sequence up to 100 correctly?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Bing Search",
                "explanation": "Bing Search provides information, but not precision logic execution.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Code Interpreter",
                "explanation": "Generative models often fail at complex math; using Code Interpreter allows them to write a script to calculate the result accurately.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "File Search",
                "explanation": "File Search is for finding text in documents, not for calculation logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The Display Name",
                "explanation": "Naming the agent 'Math Expert' does not technically improve its ability to do math.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            }
        ]
    },
    {
        "id": 73,
        "question": "What is an 'AIFunction' in the context of the .NET AI Agent SDK?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "A function that only works on Apple devices.",
                "explanation": "AI Agent Service is platform-agnostic via its SDKs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A metadata-rich wrapper around a .NET method that allows an agent to understand and call it.",
                "explanation": "AIFunctions allow you to expose your application's business logic as tools to an AI agent.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A way to generate voice from text.",
                "explanation": "That is the Azure Speech service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A way to delete the agent's memory.",
                "explanation": "Memory deletion is typically a management operation, not an AIFunction.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            }
        ]
    },
    {
        "id": 74,
        "question": "How do you provide a custom 'Tool' to a Python-based agent in the Azure AI Foundry SDK?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Email it to Microsoft.",
                "explanation": "This is not a technical integration method.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Define the tool as a function with the @tool decorator and pass it to the agent's tool list.",
                "explanation": "The SDK automatically parses functions decorated with @tool to create the tool definition for the model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Save the tool in a CSV file.",
                "explanation": "Logic cannot be stored in a CSV format.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use a regular expression.",
                "explanation": "RegEx is for text matching, not for defining agent tools.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            }
        ]
    },
    {
        "id": 75,
        "question": "What is the primary purpose of a 'Semantic Search' tool for an AI agent?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To find spelling errors in a file.",
                "explanation": "Spell checking is a different task.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To retrieve information based on conceptual meaning rather than just keyword matching.",
                "explanation": "Semantic search allows agents to find relevant data even if the exact keywords are not present.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To translate search results into French.",
                "explanation": "That is the job of a translation tool.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To delete old search logs.",
                "explanation": "Log management is not semantic search.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            }
        ]
    },
    {
        "id": 76,
        "question": "Which of these is a benefit of using a multi-agent system over a single large agent?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It is always cheaper.",
                "explanation": "Multi-agent systems can sometimes be more expensive due to multiple model calls.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It improves accuracy by using specialized instructions and tools for specific sub-tasks.",
                "explanation": "Breaking down a large problem allows each agent to focus intensely on one area, leading to better precision.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It requires less code to write.",
                "explanation": "Orchestrating multiple agents usually requires more code and configuration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It only works for translation tasks.",
                "explanation": "Multi-agent systems work for a wide variety of complex tasks.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            }
        ]
    },
    {
        "id": 77,
        "question": "When developing an AI Agent, why should you avoid extremely long instructions (e.g., 20 pages)?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Because Azure has a 1-page limit.",
                "explanation": "There is no physical 1-page limit, but there are token and performance limits.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Because the model may 'forget' earlier instructions or become confused, and it increases token costs for every turn.",
                "explanation": "Long instructions degrade the model's attention focus and lead to higher latency and higher costs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Because agents don't like to read.",
                "explanation": "Models are engines that process text; 'liking' is not a technical concept.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Because it makes the agent too smart for the user.",
                "explanation": "Excessive length usually makes the agent less reliable, not 'too smart'.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/2-understand-agents"
            }
        ]
    },
    {
        "id": 78,
        "question": "In the Azure AI Agent SDK, what is a 'Run Step' of type 'tool_calls'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The agent is calling for help from a human.",
                "explanation": "Tool calls are for automated logic, not human intervention.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A log record indicating that the model decided to use a tool and providing the tool's name and input.",
                "explanation": "Run steps allow developers to inspect the reasoning process and verify that the correct tools were invoked.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A way to delete the tool.",
                "explanation": "Run steps are for observability, not management.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The step where the agent reboots.",
                "explanation": "Agents do not reboot during a run.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/3-exercise-develop-ai-agent"
            }
        ]
    },
    {
        "id": 79,
        "question": "What is the primary benefit of using 'Vector Search' in an AI Agent system?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "It allows the agent to find information based on semantic similarity rather than exact word matches.",
                "explanation": "Vector search is the technology that powers conceptual understanding in retrieval tasks.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "It makes the agent's voice sound more natural.",
                "explanation": "Vectors are used for search, not for speech synthesis.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It reduces the model's deployment cost.",
                "explanation": "Vector search is a separate service cost (like Azure AI Search).",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It allows the agent to run on a smartphone.",
                "explanation": "Vector search is a cloud-based indexing technology.",
                "source": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools"
            }
        ]
    },
    {
        "id": 80,
        "question": "How can you implement a 'Fallback Strategy' if an agent fails to find an answer in your private documents?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Tell the user the system is broken.",
                "explanation": "This is a poor user experience fallback.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Use a Router node to check the agent's output and, if empty, route the request to a Bing Search agent for a web-based answer.",
                "explanation": "Layering specialized agents with different tools allows you to create highly resilient and helpful AI systems.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Only answer the question if the answer is in the first document.",
                "explanation": "This is a restricted policy, not a fallback strategy.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Randomly choose an answer.",
                "explanation": "This is dangerous and leads to hallucinations.",
                "source": "https://learn.microsoft.com/en-us/training/modules/orchestrate-multi-agent-workflows/3-multi-agent-patterns"
            }
        ]
    },
    {
        "id": 81,
        "question": "Which feature of the Azure AI Language service should you use to identify not just the sentiment of a sentence, but specifically which aspect of a product (e.g., 'battery life' or 'screen brightness') the sentiment refers to?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Sentiment Analysis",
                "explanation": "Standard sentiment analysis provides a score for the whole document or sentence, but doesn't link it to specific features.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Opinion Mining",
                "explanation": "Opinion mining (also known as Aspect-based Sentiment Analysis) identifies the target of the sentiment and the specific opinion word used.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Key Phrase Extraction",
                "explanation": "This identifies important concepts but does not associate them with a positive or negative sentiment score.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/4-extract-key-phrases"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Named Entity Recognition",
                "explanation": "NER identifies entities like people or products but does not analyze the sentiment associated with them.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/5-extract-entities"
            }
        ]
    },
    {
        "id": 82,
        "question": "You are building a bot that needs to distinguish between 'Mercury' the planet and 'Mercury' the element. Which feature of Azure AI Language is most appropriate?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Language Detection",
                "explanation": "This only identifies the human language (e.g., English), not the meaning of specific words.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Named Entity Recognition (NER)",
                "explanation": "While NER identifies 'Mercury' as an entity, it doesn't necessarily resolve the ambiguity without the Linking feature.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/5-extract-entities"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Entity Linking",
                "explanation": "Entity Linking disambiguates entities by linking them to a specific knowledge base, such as Wikipedia.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/5-extract-entities"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "PII Detection",
                "explanation": "PII detection is for finding sensitive personal info, not disambiguating scientific terms.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/5-extract-entities"
            }
        ]
    },
    {
        "id": 83,
        "question": "You need to reduce a long legal document to its most critical sentences without changing the original wording. Which summarization type should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Extractive Summarization",
                "explanation": "Extractive summarization pulls out the most representative sentences directly from the original text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/6-extract-summaries"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Abstractive Summarization",
                "explanation": "Abstractive summarization paraphrases the content, which might change the original wording.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/6-extract-summaries"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Key Phrase Extraction",
                "explanation": "This provides individual phrases, not full coherent sentences for a document summary.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/4-extract-key-phrases"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Opinion Mining",
                "explanation": "Opinion mining is for sentiment analysis, not for document summarization.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            }
        ]
    },
    {
        "id": 84,
        "question": "In a Conversational Language Understanding (CLU) model, what do you call the specific action or goal that a user wants to achieve, such as 'CheckWeather' or 'BookFlight'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Utterance",
                "explanation": "An utterance is the actual text the user says, not the goal behind it.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Intent",
                "explanation": "Intents represent the goals or actions the user expresses in their input.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Entity",
                "explanation": "Entities are pieces of information relevant to the intent (like a city name), not the goal itself.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Appliance",
                "explanation": "This is not a term used in CLU modeling.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            }
        ]
    },
    {
        "id": 85,
        "question": "When building a CLU model for a hotel bot, you want to recognize dates and times automatically without manually providing every possible variation. Which entity type should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Prebuilt Entity",
                "explanation": "Azure AI provides prebuilt entities for common types like DateTime, Number, and Currency.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "List Entity",
                "explanation": "List entities are for a specific, static set of words (like a list of cities), not for the dynamic range of dates.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Learned Entity",
                "explanation": "While possible, it's inefficient to train a learned model for something Azure already provides as a prebuilt component.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "None Entity",
                "explanation": "The None intent handles unknown inputs; it is not an entity type for dates.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            }
        ]
    },
    {
        "id": 86,
        "question": "You are creating a Question Answering solution. You have a long FAQ document that has a hierarchical structure. How should you import it to maintain the context of follow-up questions?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Enable Chit-chat",
                "explanation": "Chit-chat is for general greetings and small talk, not for structural document ingestion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Enable Multi-turn conversations",
                "explanation": "Multi-turn extraction allows the service to link questions and answers in a hierarchy, enabling follow-up prompts.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use Metadata tags",
                "explanation": "Metadata is used for filtering responses, but multi-turn is required to capture the structure of the document.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/5-test-publish-knowledge-base"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use a Sync API call",
                "explanation": "The API call type does not affect how the document structure is parsed during ingestion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            }
        ]
    },
    {
        "id": 87,
        "question": "Which service should you use to build an application that can translate live speech from English into spoken French in real-time?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Translator",
                "explanation": "Translator is primarily for text-to-text translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure AI Speech (Speech Translation)",
                "explanation": "The Speech service includes a specific Translation feature that handles speech-to-speech and speech-to-text in real-time.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/7-translate-speech"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Language Service (Conversation)",
                "explanation": "The Language service handles text analysis, but speech processing belongs to the Speech service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure AI Video Indexer",
                "explanation": "Video Indexer is for batch processing and insights from video files, not real-time speech translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            }
        ]
    },
    {
        "id": 88,
        "question": "You want to customize how a bot speaks (e.g., adding pauses or changing the pitch of the voice). Which technology must you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "JSON prompt",
                "explanation": "JSON is used for API payloads, not for voice prosody control.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "SSML (Speech Synthesis Markup Language)",
                "explanation": "SSML is an XML-based language that provides granular control over speech generation (prosody, style, breaks).",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Markdown",
                "explanation": "Markdown is for text formatting, not for controlling speech audio characteristics.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Python Voice SDK",
                "explanation": "While the SDK is used to send the request, the actual styling commands are formatted in SSML.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            }
        ]
    },
    {
        "id": 89,
        "question": "What is the primary difference between Extractive and Abstractive summarization in the Azure AI Language service?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Extractive is for short text; Abstractive is for long text.",
                "explanation": "Both can be used for long text; the difference is in the method of generation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/6-extract-summaries"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Extractive uses existing sentences; Abstractive generates new sentences.",
                "explanation": "Extractive pulls sentences directly from the source. Abstractive summarizes by rephrasing and generating new text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/6-extract-summaries"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Extractive is cheaper than Abstractive.",
                "explanation": "Pricing is typically based on transaction volume, not the summary type specifically, though resource usage varies.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/6-extract-summaries"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Abstractive requires a GPU; Extractive does not.",
                "explanation": "As a cloud service, the hardware requirements are managed by Azure, not the user.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/6-extract-summaries"
            }
        ]
    },
    {
        "id": 90,
        "question": "You need to ensure that your Question Answering bot provides a specific set of answers for common small talk like 'How are you?'. What should you add to your project?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "A custom Python tool",
                "explanation": "You don't need custom code; the service has a built-in feature for this.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Chit-chat source",
                "explanation": "Chit-chat allows you to add a personality (Professional, Friendly, etc.) to handle casual conversation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "PII Redaction",
                "explanation": "PII redaction is for security, not for personality or casual answers.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Key Phrase Extraction",
                "explanation": "This identifies phrases but does not provide pre-authored responses for small talk.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            }
        ]
    },
    {
        "id": 91,
        "question": "You are creating a Custom NER (Named Entity Recognition) model. You need to ensure the model correctly identifies your company's specific product codes. What is the first step in the Language Studio?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-custom-named-entity-recognition-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Deploy the model",
                "explanation": "You cannot deploy a model until it is trained and labeled.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-named-entity-recognition-solution/4-train-evaluate-model"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Label the data in the documents",
                "explanation": "Custom NER requires you to highlight and label specific entities in your training documents to teach the model what to look for.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-named-entity-recognition-solution/3-label-data"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Configure an endpoint",
                "explanation": "Endpoint configuration happens after the model is trained.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-named-entity-recognition-solution/4-train-evaluate-model"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Translate the documents",
                "explanation": "Translation is not a required step for training a Custom NER model unless your data is in a different language than your target.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-named-entity-recognition-solution/3-label-data"
            }
        ]
    },
    {
        "id": 92,
        "question": "When using the Azure AI Translator service, what is the purpose of 'Transliteration'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Translating the meaning of text.",
                "explanation": "Standard translation handles the meaning; transliteration is different.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Converting text from one script to another (e.g., Japanese Kanji to Latin characters).",
                "explanation": "Transliteration changes the writing system (script) so the word can be pronounced, without necessarily changing the language.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Detecting the language of the text.",
                "explanation": "This is handled by the Detect feature of the Translator service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Summarizing the text.",
                "explanation": "Summarization is a feature of the Language service, not the Translator service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            }
        ]
    },
    {
        "id": 93,
        "question": "You have a Question Answering knowledge base. You want to provide different answers based on whether the user is a 'New Customer' or an 'Existing Customer'. How should you implement this?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Use Metadata tags and filter them in the client application.",
                "explanation": "Metadata allows you to associate key-value pairs with QnA pairs, which the client can use to filter the results.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/5-test-publish-knowledge-base"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Create two separate Azure resources.",
                "explanation": "This is inefficient; metadata filtering within a single resource is the recommended approach.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/5-test-publish-knowledge-base"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use Active Learning.",
                "explanation": "Active learning is for improving the quality of answers over time, not for segmenting answers by user type.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/5-test-publish-knowledge-base"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use a Prebuilt Entity.",
                "explanation": "Prebuilt entities are for extracting data from text, not for categorizing the whole QnA response logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/5-test-publish-knowledge-base"
            }
        ]
    },
    {
        "id": 94,
        "question": "Which Speech service capability allows you to verify the identity of a person based on their unique voice characteristics?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Speech to Text",
                "explanation": "Speech to Text only transcribes the words spoken, not who said them.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Speaker Recognition",
                "explanation": "Speaker Recognition can verify and identify speakers based on their unique voice signatures.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Text to Speech",
                "explanation": "Text to Speech generates audio from text; it doesn't analyze a user's voice.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/5-text-to-speech"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "SSML",
                "explanation": "SSML is for controlling synthesis, not for voice biometric identification.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            }
        ]
    },
    {
        "id": 95,
        "question": "In the Azure AI Speech service, what is the role of a 'Custom Acoustic Model'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To recognize industry-specific jargon.",
                "explanation": "This is typically the job of a Custom Language Model, not an Acoustic Model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/4-exercise-speech-to-text"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To improve transcription accuracy in noisy environments or for specific accents.",
                "explanation": "Acoustic models adapt the Speech service to the physical characteristics of the audio and the speaker's voice.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/4-exercise-speech-to-text"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To translate speech.",
                "explanation": "Translation is a separate model capability entirely.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/7-translate-speech"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To generate a synthetic voice.",
                "explanation": "Synthetic voice generation is handled by Text to Speech models.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/5-text-to-speech"
            }
        ]
    },
    {
        "id": 96,
        "question": "You want to ensure that your Translator API calls do not translate specific brand names like 'Contoso'. What should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Language Detection",
                "explanation": "This identifies the language but doesn't protect specific words from translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Dynamic Dictionary or the 'notranslate' tag.",
                "explanation": "You can use the HTML tag <span translate='no'> or provide a dictionary to preserve specific terms across translations.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Named Entity Recognition",
                "explanation": "The Translator API does not automatically use NER to skip translation for all identified entities.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "PII Detection",
                "explanation": "PII detection finds sensitive info but doesn't stop it from being translated if sent to the API.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            }
        ]
    },
    {
        "id": 97,
        "question": "Which Azure AI Language project type should you use to build a model that classifies an entire document as either 'Spam' or 'Not Spam'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-custom-text-classification-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Custom NER",
                "explanation": "Custom NER classifies individual words/phrases within a document, not the whole document.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-named-entity-recognition-solution/2-understand-custom-ner"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Custom Single Label Classification",
                "explanation": "This project type is designed to assign one specific category (Spam or Not Spam) to a whole document.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-text-classification-solution/2-understand-custom-text-classification"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Custom Multi Label Classification",
                "explanation": "Multi-label is for documents that belong to multiple categories at once (e.g., 'Politics' and 'International').",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-text-classification-solution/2-understand-custom-text-classification"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Sentiment Analysis",
                "explanation": "Sentiment analysis identifies emotion (positive/negative), not technical categories like 'Spam'.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            }
        ]
    },
    {
        "id": 98,
        "question": "What is the purpose of the 'None' intent in a Conversational Language Understanding (CLU) model?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To stop the bot from talking.",
                "explanation": "The 'None' intent is a catch-all for unknown inputs, not a command to stop the service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To handle utterances that do not fall into any of your defined intents.",
                "explanation": "The 'None' intent acts as a safety bucket for inputs the model doesn't recognize, preventing them from being misclassified into your actual goals.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To delete old training data.",
                "explanation": "Intent names do not control data management features.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To reduce the price of the API call.",
                "explanation": "API pricing is independent of which intent is triggered.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            }
        ]
    },
    {
        "id": 99,
        "question": "You need to build a bot that can answer questions based on a collection of PDF manuals. Which Language feature should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "CLU",
                "explanation": "CLU is for intent mapping, not for extracting answers from large documents.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/2-understand-question-answering"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Question Answering",
                "explanation": "Question Answering allows you to ingest documents (PDFs, URLs) and provide a conversational search experience over them.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/2-understand-question-answering"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Named Entity Recognition",
                "explanation": "NER extracts specific terms but doesn't provide answers to complex questions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/2-understand-question-answering"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Custom Text Classification",
                "explanation": "Classification categorizes documents but does not enable question-based retrieval.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/2-understand-question-answering"
            }
        ]
    },
    {
        "id": 100,
        "question": "In the Azure AI Speech service, what is 'Prosody'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The translation accuracy score.",
                "explanation": "Prosody is a term related to speech synthesis, not translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The pitch, rate, and volume of the synthetic voice.",
                "explanation": "Prosody refers to the rhythm and intonation of speech, which can be adjusted using SSML tags.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The speed of the network connection.",
                "explanation": "Prosody is a linguistic/audio property, not a network metric.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The number of users in a chat session.",
                "explanation": "Prosody does not refer to user count.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            }
        ]
    },
    {
        "id": 101,
        "question": "Which parameter in the Translator API is used to automatically determine the language of the source text?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "to=",
                "explanation": "The 'to' parameter specifies the target language, not the source.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Omit the 'from' parameter.",
                "explanation": "If you omit the 'from' parameter, the Translator service uses its detection feature to identify the source language.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "source=auto",
                "explanation": "The API does not use 'source=auto'; it relies on the omission of the 'from' parameter.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "detect=true",
                "explanation": "While there is a separate /detect endpoint, automatic detection in /translate is handled by omitting the 'from' parameter.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            }
        ]
    },
    {
        "id": 102,
        "question": "In CLU, what is a 'List Entity' used for?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "To recognize a fixed set of canonical values and their synonyms.",
                "explanation": "List entities are best for static lists like product models or airport codes where you can provide all variations upfront.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "To identify cities using machine learning.",
                "explanation": "While it could work, cities are usually better handled via Learned entities or Prebuilt entities for broader coverage.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To count the number of words in an utterance.",
                "explanation": "List entities do not perform counting logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To store user passwords.",
                "explanation": "Entities are for extraction, not for secure database storage of sensitive credentials.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            }
        ]
    },
    {
        "id": 103,
        "question": "What is the primary benefit of using 'Opinion Mining' over standard Sentiment Analysis?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It is faster to execute.",
                "explanation": "Opinion mining is more complex and typically takes slightly more processing than standard sentiment analysis.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It provides a granular breakdown of sentiment related to specific attributes.",
                "explanation": "It helps businesses understand *what* exactly customers like or dislike (e.g., 'The battery is great but the price is too high').",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It works in more languages.",
                "explanation": "Both features generally support the same core set of languages.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It automatically redacts personal info.",
                "explanation": "This is the job of PII Detection, not Opinion Mining.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/5-extract-entities"
            }
        ]
    },
    {
        "id": 104,
        "question": "Which Azure resource should you create if you want to use multiple AI capabilities (Speech, Language, and Vision) while sharing a single endpoint and key?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Language Resource",
                "explanation": "A Language resource only covers NLP capabilities.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/3-create-azure-resources"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure AI Services Resource",
                "explanation": "The multi-service resource provides unified access to most Azure AI services including Speech, Vision, and Language.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/3-create-azure-resources"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "OpenAI Resource",
                "explanation": "OpenAI resources are specialized for generative models and are managed separately from the multi-service resource for Speech/Vision.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/3-create-azure-resources"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Cognitive Search Resource",
                "explanation": "This is for indexing and searching data, not for general AI service endpoints.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/3-create-azure-resources"
            }
        ]
    },
    {
        "id": 105,
        "question": "How can you improve the relevance of your Question Answering model over time based on actual user queries?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Increase the model's temperature.",
                "explanation": "Temperature is for generative models; QA models use scoring and Active Learning for improvement.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/5-test-publish-knowledge-base"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Enable Active Learning.",
                "explanation": "Active learning suggests improvements by looking at user queries that were close matches to multiple answers.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/5-test-publish-knowledge-base"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Translate the knowledge base daily.",
                "explanation": "Translation doesn't improve the logic or relevance of the existing QnA pairs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/5-test-publish-knowledge-base"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Delete the knowledge base and restart.",
                "explanation": "This is a destructive action, not an improvement strategy.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/5-test-publish-knowledge-base"
            }
        ]
    },
    {
        "id": 106,
        "question": "Which SSML tag would you use to add a 2-second pause between two sentences in a bot's speech?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "<pause time='2s' />",
                "explanation": "The correct SSML tag name is <break>, not <pause>.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "<break time='2000ms' />",
                "explanation": "The <break> tag is used to insert pauses of a specific duration in synthesized speech.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "<stop duration='2s' />",
                "explanation": "This is not a valid SSML tag for synthesis control.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "<silence value='2' />",
                "explanation": "The correct tag is <break>.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            }
        ]
    },
    {
        "id": 107,
        "question": "When configuring an Azure AI Translator resource, you want to use a Custom Translator. Where must your training data be stored?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "In the Translator API endpoint.",
                "explanation": "The endpoint processes requests; it doesn't host training data files.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "In an Azure Blob Storage container.",
                "explanation": "Custom Translator requires you to provide access to your parallel data files stored in Azure Storage.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "On your local hard drive.",
                "explanation": "The service must be able to access the data via a cloud URI for training.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "In a SQL database.",
                "explanation": "Blob storage is the standard supported format for Custom Translator datasets.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            }
        ]
    },
    {
        "id": 108,
        "question": "What is the purpose of the 'Opinion Mining' confidence score?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "To indicate the model's certainty that an identified opinion refers to a specific aspect.",
                "explanation": "Confidence scores represent the probability that the analysis is correct, allowing you to filter out low-confidence results.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "To show the volume of the synthetic voice.",
                "explanation": "Confidence score is a mathematical probability, not an audio property.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To track the total number of reviews analyzed.",
                "explanation": "Confidence scores are per-opinion, not an aggregate count.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To see if the user is lying.",
                "explanation": "AI models cannot determine truthfulness or deceit.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            }
        ]
    },
    {
        "id": 109,
        "question": "In a CLU model, which feature allows you to route a query to other language models like a Question Answering project or a legacy LUIS app?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "List Entity",
                "explanation": "List entities are for extraction, not for routing logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Orchestration Workflow Project",
                "explanation": "Orchestration workflows are a special project type in the Language service designed to route intents to different specialized models.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Sentiment Analysis",
                "explanation": "Sentiment analysis identifies emotions; it does not route intents to other apps.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "PII Detection",
                "explanation": "PII detection is for security, not for architectural intent routing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/build-conversational-language-understanding-model/2-understand-resources"
            }
        ]
    },
    {
        "id": 110,
        "question": "You are developing a speech-to-text application for a radiology clinic. Standard transcription fails on complex medical terms. What should you do?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Ask the doctors to speak slower.",
                "explanation": "This is a behavioral fix, not a technical one; the model should be adapted to the domain.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/4-exercise-speech-to-text"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Train a Custom Language Model with a dataset of medical terms and reports.",
                "explanation": "Custom Language models allow the service to learn specialized vocabulary that isn't in the standard base model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/4-exercise-speech-to-text"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Use a translation service.",
                "explanation": "Translation won't help if the source transcription itself is incorrect.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/7-translate-speech"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Change the synthetic voice.",
                "explanation": "Voice selection affects Text to Speech, not transcription accuracy.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/5-text-to-speech"
            }
        ]
    },
    {
        "id": 111,
        "question": "Which of these is a valid way to improve a Custom Text Classification model that is confusing 'Billing' and 'Returns'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-custom-text-classification-solution/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Add more training documents to both classes to clarify the differences.",
                "explanation": "Improving the training set with more diverse and labeled data is the most effective way to resolve class confusion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-text-classification-solution/3-label-data"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Delete the 'Returns' class.",
                "explanation": "Deleting a class removes functionality; it doesn't solve the confusion for future documents.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-text-classification-solution/3-label-data"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Translate everything to French.",
                "explanation": "Translation does not help a classification model distinguish between technical categories.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-text-classification-solution/3-label-data"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use PII Detection.",
                "explanation": "PII detection is for security, not for document classification logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-text-classification-solution/3-label-data"
            }
        ]
    },
    {
        "id": 112,
        "question": "In a Speech-enabled app, what is 'Pronunciation Assessment'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "A way to change the bot's accent.",
                "explanation": "Accent selection is a feature of Text to Speech voices.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A feature that evaluates a speaker's accuracy, fluency, and completeness.",
                "explanation": "This is often used in language learning apps to give users feedback on how well they are speaking.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A tool to translate speech.",
                "explanation": "Translation is a different service capability.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/7-translate-speech"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A tool to summarize voice notes.",
                "explanation": "Summarization is a Language service feature, not a Speech pronunciation feature.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            }
        ]
    },
    {
        "id": 113,
        "question": "Which header is required for a POST request to the Azure AI Language API if you are using a multi-service resource?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Content-Type: application/xml",
                "explanation": "Azure AI Services use JSON, not XML.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/4-extract-key-phrases"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Ocp-Apim-Subscription-Key",
                "explanation": "This is the standard header used to provide the subscription key for authentication.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/4-extract-key-phrases"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Auth-Token",
                "explanation": "The specific header required is Ocp-Apim-Subscription-Key.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/4-extract-key-phrases"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "API-Password",
                "explanation": "Azure doesn't use an 'API-Password' header.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/4-extract-key-phrases"
            }
        ]
    },
    {
        "id": 114,
        "question": "What is the result of applying a 'PII Redaction' policy to a document?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The document is translated.",
                "explanation": "Translation is a different service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/5-extract-entities"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Sensitive information like SSNs or emails is replaced with placeholders (e.g., *).",
                "explanation": "Redaction hides private info while preserving the rest of the text structure.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/5-extract-entities"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The document is summarized.",
                "explanation": "Summarization and redaction are distinct features.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/5-extract-entities"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The document is deleted.",
                "explanation": "Redaction is a modification process, not a deletion process.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/5-extract-entities"
            }
        ]
    },
    {
        "id": 115,
        "question": "You are building a bot that needs to understand when a user is expressing 'Confusion'. You decide to use Sentiment Analysis. Which sentiment label would you expect to see for a confusing sentence like 'I don't understand how this works'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Positive",
                "explanation": "Confusion is generally not interpreted as a positive emotion by the model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Negative",
                "explanation": "While it sounds negative, a purely informative sentence about confusion is often labeled as neutral or negative depending on the specific phrasing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Neutral or Mixed",
                "explanation": "Sentences expressing confusion without aggressive language are often categorized as Neutral or Mixed by the Sentiment Analysis feature.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Confused",
                "explanation": "There is no 'Confused' label in the standard Azure AI Sentiment Analysis service; the labels are Positive, Negative, Neutral, and Mixed.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            }
        ]
    },
    {
        "id": 116,
        "question": "In the Translator API, which feature allows you to see the source text and target text side-by-side to understand which word mapped to which?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Detect",
                "explanation": "Detect only identifies the language.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Alignment",
                "explanation": "The alignment parameter provides information on which source word corresponds to which target word in the translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Transliteration",
                "explanation": "Transliteration changes the script, not the word-to-word mapping.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Profanity filtering",
                "explanation": "This hides bad words but does not provide word mapping details.",
                "source": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/2-understand-translator"
            }
        ]
    },
    {
        "id": 117,
        "question": "You are designing a solution that must support 50 different languages for transcription. Does the Azure AI Speech service support this?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Yes, it supports over 100 languages and variants.",
                "explanation": "The Speech service has extensive global language support for both Speech to Text and Text to Speech.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "No, it only supports 10 languages.",
                "explanation": "The service has much broader support than 10 languages.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Yes, but only for English speakers.",
                "explanation": "It supports a vast array of non-English languages and accents.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "No, it requires a separate plugin for each language.",
                "explanation": "Language support is built directly into the service; you just specify the locale in your request.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            }
        ]
    },
    {
        "id": 118,
        "question": "What is a 'Semantic Function' in the context of an AI-driven language app?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "A function that cleans up code.",
                "explanation": "Semantic functions are related to AI prompts and natural language logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A prompt-based function that uses natural language to perform logic.",
                "explanation": "Unlike native functions (code), semantic functions rely on the LLM's understanding to generate results.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A way to restart the database.",
                "explanation": "Semantic functions do not manage infrastructure.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A translation of a JSON file.",
                "explanation": "While it can process JSON, a semantic function is a conceptual wrapper for a prompt.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            }
        ]
    },
    {
        "id": 119,
        "question": "You are building a Question Answering system. Which of the following is a source you can use to populate the knowledge base?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "A publicly accessible URL to an FAQ page.",
                "explanation": "Question Answering can automatically scrape and parse FAQ structures from URLs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "A password-protected Excel file.",
                "explanation": "The service must be able to access the content without a manual password login during the import process.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A physical book.",
                "explanation": "Data must be in a digital format (file or URL) to be ingested.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A voice recording.",
                "explanation": "The source must be text-based (PDF, Word, TXT, or HTML).",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-question-answering-solution-azure-ai-language/4-create-knowledge-base"
            }
        ]
    },
    {
        "id": 120,
        "question": "When configuring a speech application, you want the bot to use a different voice style for a 'Cheerful' message. How do you implement this in SSML?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "<voice personality='cheerful'>",
                "explanation": "This is not the standard tag for controlling speaking styles.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "<mstts:express-as style='cheerful'>",
                "explanation": "The 'express-as' tag in the Microsoft namespace allows you to change the speaking style of supported neural voices.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "<style type='cheerful'>",
                "explanation": "The correct tag is <mstts:express-as>.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "<mood value='happy'>",
                "explanation": "There is no <mood> tag in the SSML standard for Azure Speech.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/6-ssml"
            }
        ]
    },
    {
        "id": 121,
        "question": "Which feature of the Azure AI Vision service allows you to generate a human-readable sentence that summarizes the content of an image?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Tagging",
                "explanation": "Tagging provides a list of individual words related to the image, not a full sentence.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Captioning",
                "explanation": "The Caption feature generates a complete sentence describing the image's content.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Object Detection",
                "explanation": "Object detection identifies items and their locations but does not describe the scene in prose.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/4-detect-objects"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "OCR",
                "explanation": "OCR (Optical Character Recognition) is used to extract text, not to describe visual scenes.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/5-read-text"
            }
        ]
    },
    {
        "id": 122,
        "question": "You are using the Azure AI Vision service to identify where a specific brand logo appears in a picture. What information does the API return to indicate the logo's location?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The GPS coordinates of the photographer.",
                "explanation": "Location in computer vision refers to coordinates within the image file, not geographical data.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/4-detect-objects"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A bounding box (x, y coordinates and width/height).",
                "explanation": "The API returns a bounding box that defines the rectangle where the detected object or logo is located.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/4-detect-objects"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The image file size.",
                "explanation": "File size does not indicate the location of objects within the image.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/4-detect-objects"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A 3D mesh of the object.",
                "explanation": "The standard AI Vision service provides 2D bounding boxes, not 3D meshes.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/4-detect-objects"
            }
        ]
    },
    {
        "id": 123,
        "question": "Which Azure AI Vision feature is specifically designed to extract large amounts of text from a multi-page PDF document?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The OCR (Quick) API",
                "explanation": "The legacy OCR API is optimized for small amounts of text in images, not multi-page documents.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The Read API",
                "explanation": "The Read API is the latest asynchronous feature designed for multi-page documents and complex text layouts.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Image Captioning",
                "explanation": "Captioning describes what is in the image; it does not read the text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Face Detection",
                "explanation": "Face detection identifies people, not text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            }
        ]
    },
    {
        "id": 124,
        "question": "You want to build a model that can tell the difference between a 'Croissant' and a 'Bagel'. You have thousands of labeled images. Which service is most appropriate?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Azure AI Custom Vision (Classification)",
                "explanation": "Custom Vision allows you to train your own models for specific image categories like types of bread.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/2-understand-custom-vision"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure AI Video Indexer",
                "explanation": "Video Indexer is for video analysis, not static image classification training.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/2-understand-custom-vision"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Face API",
                "explanation": "The Face API is for human faces, not food items.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/2-understand-custom-vision"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure AI Translator",
                "explanation": "Translator is for text-to-text conversion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/2-understand-custom-vision"
            }
        ]
    },
    {
        "id": 125,
        "question": "In Custom Vision, what does the 'Precision' metric represent?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The percentage of actual items the model found.",
                "explanation": "This is the definition of Recall, not Precision.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The percentage of the model's positive predictions that were actually correct.",
                "explanation": "Precision measures how accurate the model is when it claims to have found an object.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The time it took to train the model.",
                "explanation": "Training time is not a performance accuracy metric.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The number of images in the dataset.",
                "explanation": "Dataset size is an input, not a performance metric.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            }
        ]
    },
    {
        "id": 126,
        "question": "When using the Azure AI Face service, which operation is used to determine if two faces belong to the same person?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Detection",
                "explanation": "Detection only finds where faces are; it doesn't compare them for identity.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Verification",
                "explanation": "Verification is a 1:1 comparison to see if two face images represent the same person.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Identification",
                "explanation": "Identification is a 1:N comparison to find a match in a group of people.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Grouping",
                "explanation": "Grouping organizes similar-looking faces into clusters but doesn't necessarily prove identity.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            }
        ]
    },
    {
        "id": 127,
        "question": "Which service should you use to automatically redact (blur) human faces and license plates in a video for privacy compliance?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Vision (OCR)",
                "explanation": "Vision OCR extracts text but does not have a built-in video redaction workflow.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/2-understand-video-indexer"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure AI Video Indexer",
                "explanation": "Video Indexer has built-in presets for detecting and blurring faces and sensitive info in video files.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/2-understand-video-indexer"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Custom Vision",
                "explanation": "Custom Vision is for classification/detection, not for automated video editing/redaction workflows.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/2-understand-video-indexer"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure AI Search",
                "explanation": "Search is for indexing data, not for editing video content.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/2-understand-video-indexer"
            }
        ]
    },
    {
        "id": 128,
        "question": "In the Azure AI Face service, what is the 'Face ID'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "A temporary unique identifier for a detected face that expires after 24 hours.",
                "explanation": "Face IDs are transient and used for subsequent operations like verification or grouping within a 24-hour window.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "The person's legal social security number.",
                "explanation": "Azure AI does not store or retrieve legal IDs through the Face service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A permanent ID stored in the Azure database forever.",
                "explanation": "Face IDs are temporary; persistent storage requires creating a 'PersonGroup' or 'LargePersonGroup'.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The username of the developer.",
                "explanation": "Face ID refers to the detected face in the image, not the person calling the API.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            }
        ]
    },
    {
        "id": 129,
        "question": "Which Azure AI Video Indexer insight identifies when a famous person appears in a video?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Keywords",
                "explanation": "Keywords identify topics discussed, not necessarily specific people by sight.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Celebrities",
                "explanation": "The Celebrities insight identifies thousands of globally known figures in videos.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Sentiment",
                "explanation": "Sentiment tracks the mood of the audio/transcript.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Labels",
                "explanation": "Labels identify general objects (like 'dog' or 'car') rather than specific individuals.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            }
        ]
    },
    {
        "id": 130,
        "question": "You need to train a Custom Vision model but you only have 5 images per category. Is this enough to start training?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "No, you need at least 1,000 images.",
                "explanation": "Custom Vision can work with much smaller datasets due to transfer learning.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/3-label-data"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Yes, 5 images per tag is the minimum required to start training.",
                "explanation": "Microsoft recommends at least 50 images for better accuracy, but 5 is the technical minimum to initiate a training iteration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/3-label-data"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "No, you need exactly 50 images.",
                "explanation": "50 is recommended, but 5 is the minimum.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/3-label-data"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Yes, but only for object detection, not classification.",
                "explanation": "The 5-image minimum applies to both project types.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/3-label-data"
            }
        ]
    },
    {
        "id": 131,
        "question": "Which Azure AI Vision feature provides the coordinates of text found in an image as well as the text itself?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Image Captioning",
                "explanation": "Captioning describes the scene but does not return text coordinates.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "OCR / Read API",
                "explanation": "OCR services return both the recognized text and a bounding box for each word or line.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Object Detection",
                "explanation": "This identifies objects, but text extraction is a specialized OCR process.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Tagging",
                "explanation": "Tagging returns high-level descriptive terms, not text coordinates.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            }
        ]
    },
    {
        "id": 132,
        "question": "In a Custom Vision object detection project, what must you do after uploading images but before training?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Translate the image metadata.",
                "explanation": "Translation is not part of the vision training workflow.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/3-label-images"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Manually draw bounding boxes and label the objects.",
                "explanation": "Object detection requires you to specify where each object is located in every training image.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/3-label-images"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Resize every image to 100x100 pixels.",
                "explanation": "Custom Vision handles resizing automatically; you do not need to do this manually.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/3-label-images"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Delete the background of every image.",
                "explanation": "Background removal is not a requirement for standard training.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/3-label-images"
            }
        ]
    },
    {
        "id": 133,
        "question": "Which insight from Video Indexer allows you to find every time a specific brand's name is mentioned in the audio transcript?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Visual Labels",
                "explanation": "Visual labels are for things seen on screen, not mentioned in audio.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Brands",
                "explanation": "The Brands insight identifies mentions of well-known companies and organizations in both speech and on-screen text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Face Groups",
                "explanation": "Face groups identify people, not brand names.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Motion detection",
                "explanation": "Motion detection tracks physical movement in the video.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            }
        ]
    },
    {
        "id": 134,
        "question": "You want to use the Face service to detect if someone is wearing glasses. Which parameter should you include in your API call?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "returnFaceId",
                "explanation": "This returns a unique ID for the face, not its attributes.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "returnFaceAttributes (glasses)",
                "explanation": "The returnFaceAttributes parameter allows you to request specific features like glasses, head pose, or blur.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "detectGlass: true",
                "explanation": "This is not the correct parameter name in the Face API.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "ocrEnabled",
                "explanation": "OCR is for text, not for analyzing facial features.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            }
        ]
    },
    {
        "id": 135,
        "question": "In Custom Vision, what is the 'Probability Threshold' used for?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "To filter out predictions that have a confidence score below a certain level.",
                "explanation": "The threshold determines which results are shown based on the model's certainty.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "To set the training time.",
                "explanation": "Thresholding is a post-training evaluation/prediction parameter.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To delete low-quality images.",
                "explanation": "It doesn't delete images; it just ignores low-confidence predictions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To translate the labels into different languages.",
                "explanation": "Probability threshold is a mathematical filter, not a translation tool.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            }
        ]
    },
    {
        "id": 136,
        "question": "Which Azure AI Vision feature identifies landmarks like the Eiffel Tower or the Great Wall of China?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "OCR",
                "explanation": "OCR reads text; it doesn't recognize buildings.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Landmarks domain-specific model",
                "explanation": "The service includes specialized models for identifying famous landmarks and celebrities.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Face API",
                "explanation": "Face API is for people, not buildings.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Video Indexer",
                "explanation": "While Video Indexer can find landmarks in video, the specific image feature is part of AI Vision.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            }
        ]
    },
    {
        "id": 137,
        "question": "When training a Custom Vision model, what is the benefit of adding a 'Negative' tag to some images?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It makes the model faster.",
                "explanation": "Negative tags improve accuracy, not speed.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/3-label-data"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It teaches the model what your target object is NOT, reducing false positives.",
                "explanation": "Negative images provide context for items that might be confused with the target tag.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/3-label-data"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It deletes bad images from the dataset.",
                "explanation": "The images are kept to train the model, not deleted.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/3-label-data"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It is required for all Face API projects.",
                "explanation": "Negative tagging is a feature of Custom Vision, not the standard Face API.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/3-label-data"
            }
        ]
    },
    {
        "id": 138,
        "question": "You are building a security app that identifies authorized employees at a door. Which Face service feature should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Face Detection",
                "explanation": "Detection only finds faces; it doesn't know who they belong to.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Face Identification",
                "explanation": "Identification matches a detected face against a database (PersonGroup) of known individuals.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Face Grouping",
                "explanation": "Grouping clusters unknown faces but doesn't perform identity matching.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Image Captioning",
                "explanation": "Captioning is a general description feature of the AI Vision service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            }
        ]
    },
    {
        "id": 139,
        "question": "Which Video Indexer feature allows a user to skip to specific parts of a video where a certain topic is discussed?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "OCR",
                "explanation": "OCR reads text but doesn't provide a topic-based navigation structure.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Insights Widgets and Timelines",
                "explanation": "Video Indexer provides timestamps for detected insights (topics, people, keywords) allowing for easy navigation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Language Detection",
                "explanation": "This identifies the language but not the navigation points for topics.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Face Blur",
                "explanation": "Blurring is for privacy, not for navigation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            }
        ]
    },
    {
        "id": 140,
        "question": "You want to extract the table structure (rows and columns) from an image of a spreadsheet. Which service is most appropriate?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Vision (standard OCR)",
                "explanation": "Standard OCR extracts text lines but is not optimized for structured tables.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure AI Document Intelligence",
                "explanation": "Document Intelligence (formerly Form Recognizer) is specifically designed to recognize and extract tables and structured fields.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Custom Vision",
                "explanation": "Custom Vision classifies images; it doesn't extract table data.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Face API",
                "explanation": "Face API is for human features.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            }
        ]
    },
    {
        "id": 141,
        "question": "What is 'Transfer Learning' in the context of Azure AI Vision services?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Teaching the model to learn a new language.",
                "explanation": "This is not related to vision model training methodology.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/2-understand-custom-vision"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Starting with a pre-trained model and fine-tuning it with a small amount of custom data.",
                "explanation": "Transfer learning allows services like Custom Vision to achieve high accuracy with very few images.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/2-understand-custom-vision"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Moving data from one Azure region to another.",
                "explanation": "That is data replication, not transfer learning.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/2-understand-custom-vision"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Deleting old models to save space.",
                "explanation": "Transfer learning is about building models, not deleting them.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/2-understand-custom-vision"
            }
        ]
    },
    {
        "id": 142,
        "question": "Which API call in the Face service is used to organize thousands of unknown faces into groups that look like the same person?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Verify",
                "explanation": "Verify is for 1:1 matching.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Group",
                "explanation": "The Group API clusters faces based on similarity without needing pre-existing labels.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Identify",
                "explanation": "Identify requires a pre-trained PersonGroup.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Detect",
                "explanation": "Detect just finds the faces; it doesn't organize them into clusters.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            }
        ]
    },
    {
        "id": 143,
        "question": "In Video Indexer, what does the 'Keywords' insight represent?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Significant terms extracted from the speech transcript and on-screen text.",
                "explanation": "Keywords give a high-level summary of the important concepts mentioned in the video.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "The programming code used to build the video.",
                "explanation": "Keywords are linguistic concepts, not source code.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The password to unlock the video.",
                "explanation": "Keywords are an analytical insight, not a security feature.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A list of colors seen in the video.",
                "explanation": "Keywords are related to meaning and context, not color palettes.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            }
        ]
    },
    {
        "id": 144,
        "question": "You want to detect when a person is looking directly at a camera. Which facial attribute provides this information?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Smile",
                "explanation": "Smile intensity does not indicate head direction.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Head Pose (pitch, roll, yaw)",
                "explanation": "Head pose data describes the orientation of the head in 3D space.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Glasses",
                "explanation": "Glasses detection only tells you if eyewear is present.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Blur",
                "explanation": "Blur indicates image quality, not head orientation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            }
        ]
    },
    {
        "id": 145,
        "question": "Which tool would you use to test Azure AI Vision features like Captioning and Tagging without writing any code?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Visual Studio Code",
                "explanation": "VS Code is for writing code.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/2-understand-resources"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Vision Studio",
                "explanation": "Vision Studio is a web-based portal for exploring and testing Azure AI Vision capabilities.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/2-understand-resources"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure CLI",
                "explanation": "CLI is a command-line tool, not a visual testing portal.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/2-understand-resources"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Postman",
                "explanation": "Postman is for API testing, but Vision Studio is the official no-code portal.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/2-understand-resources"
            }
        ]
    },
    {
        "id": 146,
        "question": "When training a model in Custom Vision, what is the 'Recall' metric?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The percentage of correct predictions.",
                "explanation": "This is Precision.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The percentage of actual objects that the model successfully identified.",
                "explanation": "Recall (also called sensitivity) measures how many of the real items in the dataset the model was able to find.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The speed of the API.",
                "explanation": "Recall is an accuracy metric.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The number of images deleted during training.",
                "explanation": "Recall is not related to file management.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/4-train-evaluate"
            }
        ]
    },
    {
        "id": 147,
        "question": "You are processing a low-quality, blurry image for OCR. Which feature should you check in the API response to see if the text is likely correct?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Line number",
                "explanation": "Line numbers show position, not accuracy.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Confidence score",
                "explanation": "The confidence score indicates the model's certainty about each recognized character or word.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Word count",
                "explanation": "Word count does not indicate accuracy.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Image format",
                "explanation": "The file format (JPG/PNG) does not indicate transcription quality.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            }
        ]
    },
    {
        "id": 148,
        "question": "In Video Indexer, what does a 'Scene' represent?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "A segment of video that depicts a continuous event and is composed of a series of related shots.",
                "explanation": "Scenes are a higher-level organizational unit than shots, identifying distinct parts of a story or event.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Every frame in the video.",
                "explanation": "Scenes are much larger than individual frames.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A list of the actors in the video.",
                "explanation": "Actors are part of the People insight, not the Scene insight.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The physical location where the video was filmed.",
                "explanation": "Scenes refer to the narrative structure, not necessarily the physical GPS location.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            }
        ]
    },
    {
        "id": 149,
        "question": "Which Azure AI Vision feature detects human faces within an image but does not provide identity matching?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Tagging",
                "explanation": "Tagging might return the word 'person', but not face coordinates.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Face detection (as an AI Vision feature)",
                "explanation": "The general AI Vision API can detect faces and return their locations without the advanced features of the specialized Face API.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Identification",
                "explanation": "Identification is for finding known people; it is not a basic detection feature.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "OCR",
                "explanation": "OCR is for text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            }
        ]
    },
    {
        "id": 150,
        "question": "What is the primary benefit of using a 'Composed Model' in Azure AI Document Intelligence?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It is cheaper than a single model.",
                "explanation": "Pricing is based on volume; composition is about functionality.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It allows a single endpoint to handle multiple different document types by automatically selecting the best model.",
                "explanation": "Composition combines several models (e.g., invoices, tax forms) into one ID for easier application integration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It translates the documents automatically.",
                "explanation": "Composition is for document classification/extraction, not translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It deletes duplicate documents.",
                "explanation": "Composition is a logical grouping, not a file management system.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            }
        ]
    },
    {
        "id": 151,
        "question": "In Custom Vision, when should you choose 'Object Detection' over 'Image Classification'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "When you want to know if there is a cat in the image.",
                "explanation": "This is a classification task.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/2-understand-object-detection"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "When you need to know exactly WHERE a cat is in the image and how many there are.",
                "explanation": "Object detection provides bounding boxes and counts for multiple instances in a single image.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/2-understand-object-detection"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "When you only have 2 images.",
                "explanation": "You need at least 15 images per tag for object detection.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/2-understand-object-detection"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "When you want to translate the image tags.",
                "explanation": "Neither feature performs translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/2-understand-object-detection"
            }
        ]
    },
    {
        "id": 152,
        "question": "Which insight from Video Indexer identifies the different emotions expressed by speakers in a video?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Keywords",
                "explanation": "Keywords identify topics, not emotion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Sentiment and Emotions",
                "explanation": "Video Indexer analyzes audio and transcript to detect emotions like joy, sadness, or anger.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Visual Labels",
                "explanation": "Visual labels identify objects, not emotions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Face Groups",
                "explanation": "Face groups identify who is on screen, but not necessarily their emotional state.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            }
        ]
    },
    {
        "id": 153,
        "question": "You are building a system that must ignore certain parts of a face, like facial hair or makeup, during identification. Which parameter should you focus on in the Face API?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "recognitionModel (e.g., recognition_04)",
                "explanation": "Newer recognition models are more robust to changes like facial hair, makeup, or accessories.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "returnFaceId",
                "explanation": "This only identifies the face session, not the accuracy of the matching model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "detectionModel",
                "explanation": "Detection models find the face, but recognition models handle the identity matching accuracy.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "smileIntensity",
                "explanation": "This is a descriptive attribute, not a matching model setting.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            }
        ]
    },
    {
        "id": 154,
        "question": "In Custom Vision, what is the purpose of 'Publishing' an iteration?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It sends the model to a public website for everyone to see.",
                "explanation": "Publishing creates an endpoint for your application, it doesn't make the data public.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/5-publish-consume"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It makes the model iteration available to be called via the Prediction API.",
                "explanation": "You must publish an iteration to generate a prediction URL and key for your application to use.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/5-publish-consume"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It deletes the training images to save space.",
                "explanation": "Training images are kept in the project.",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/5-publish-consume"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It translates the model into C# code.",
                "explanation": "Publishing hosts the model as a service; it doesn't convert it to source code (though you can export it separately).",
                "source": "https://learn.microsoft.com/en-us/training/modules/classify-images-custom-vision/5-publish-consume"
            }
        ]
    },
    {
        "id": 155,
        "question": "Which Video Indexer feature allows you to identify what objects (like 'laptop', 'car', or 'tree') are present in a video?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Visual Labels",
                "explanation": "Visual labels identify physical objects seen throughout the video.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Keywords",
                "explanation": "Keywords are based on language/audio transcript.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Celebrities",
                "explanation": "Celebrities insight is for people, not objects.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Sentiment",
                "explanation": "Sentiment tracks emotion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            }
        ]
    },
    {
        "id": 156,
        "question": "You want to read the handwriting on a digital scan of a postcard. Which service is most likely to succeed?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Azure AI Vision (Read API)",
                "explanation": "The Read API is the latest OCR technology from Microsoft specifically optimized for both printed and handwritten text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure AI Video Indexer",
                "explanation": "Video Indexer is for video, not high-resolution static document scans.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Face API",
                "explanation": "Face API does not read text.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Custom Vision (Classification)",
                "explanation": "Classification identifies the whole image (e.g., 'this is a postcard') but won't read the handwriting on it.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            }
        ]
    },
    {
        "id": 157,
        "question": "What is a 'PersonGroup' in the Azure AI Face service?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "A list of developers on the project.",
                "explanation": "The PersonGroup refers to the data of individuals you want the AI to recognize.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A container for persistent face data and identity information used for identification.",
                "explanation": "A PersonGroup allows you to store faces for up to 10,000 people (or more in a LargePersonGroup) for search and matching.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A way to delete face data automatically.",
                "explanation": "Groups are for storage, not deletion logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A billing category.",
                "explanation": "Groups are an architectural component, not a billing tier.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            }
        ]
    },
    {
        "id": 158,
        "question": "Which insight in Video Indexer detects when there is a long silence in a video?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Keywords",
                "explanation": "Keywords are based on words spoken, not silence.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Audio Effects",
                "explanation": "Audio effects insights include detection of silence, clapping, and laughter.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Sentiment",
                "explanation": "Sentiment tracks emotion in the transcript.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Visual Labels",
                "explanation": "Visual labels are for items seen on screen.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-video-with-video-indexer/4-analyze-video-indexer-output"
            }
        ]
    },
    {
        "id": 159,
        "question": "You want to extract the text from an image and you need the output to be in a specific language. Does the AI Vision OCR service translate the text for you?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Yes, it translates everything to English automatically.",
                "explanation": "The vision service only extracts the text in its original language.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "No, it only extracts text; you must use the Azure AI Translator service for translation.",
                "explanation": "Vision and Translation are two separate services that must be chained together.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Yes, but only for handwritten text.",
                "explanation": "It does not perform translation for any text type.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "No, it only works for English text.",
                "explanation": "It supports many languages for extraction, but does not translate between them.",
                "source": "https://learn.microsoft.com/en-us/training/modules/read-text-computer-vision/2-get-started"
            }
        ]
    },
    {
        "id": 160,
        "question": "In the Face service, what happens when you 'Train' a PersonGroup?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The faces are deleted to save space.",
                "explanation": "Faces are kept as references for future matching.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The service creates a mathematical model of all the people in the group so they can be identified later.",
                "explanation": "Training is a required step before you can call the Identify API to find matches.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The service translates the names of the people.",
                "explanation": "Training is for biometric matching, not translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The service emails the people in the images.",
                "explanation": "Azure AI does not send emails as part of its training process.",
                "source": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces-computer-vision/2-detect-analyze-faces"
            }
        ]
    },
    {
        "id": 161,
        "question": "Which component of Azure AI Search is responsible for connecting to an external data source and pushing data into a search index on a scheduled basis?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Search Index",
                "explanation": "The index is the physical storage for the searchable data, not the engine that moves the data.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Indexer",
                "explanation": "An indexer is a crawler that extracts searchable text and metadata from an external Azure data source and populates the index.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Skillset",
                "explanation": "A skillset defines the AI enrichments to be applied during indexing, but it doesn't handle the scheduling or data movement itself.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Data Source",
                "explanation": "The Data Source object defines the connection to the data, but the Indexer is the active component that uses that connection.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 162,
        "question": "You need to extract information from thousands of Italian restaurant receipts. Which Azure AI Document Intelligence model is most appropriate to use without any custom training?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Read model",
                "explanation": "The Read model only performs OCR (text extraction); it doesn't categorize fields like 'Total' or 'Tax'.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Prebuilt Receipt model",
                "explanation": "The prebuilt Receipt model is specifically trained to identify and extract common fields from sales receipts.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/3-receipt-model"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Layout model",
                "explanation": "The Layout model extracts tables and selection marks but does not perform semantic field extraction like a prebuilt model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Custom Template model",
                "explanation": "A custom model would require manual labeling and training; the prebuilt model is faster if the document type is supported.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            }
        ]
    },
    {
        "id": 163,
        "question": "In Azure AI Search, what is the purpose of a 'Skillset'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To define the search index schema.",
                "explanation": "The index schema is defined in the Index object, not the Skillset.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To define a set of AI enrichment steps (like OCR or Entity Recognition) to be performed during indexing.",
                "explanation": "Skillsets allow you to use AI to make unstructured data searchable by adding new metadata fields to the index.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To manage the billing for the search service.",
                "explanation": "Billing is handled at the Azure subscription and resource level.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "To provide a UI for the search engine.",
                "explanation": "Azure AI Search is an API-based service and does not provide a built-in search UI for end users.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 164,
        "question": "An index field in Azure AI Search is marked as 'Filterable'. What does this allow you to do?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It allows the field to be returned in the search results.",
                "explanation": "This is the purpose of the 'Retrievable' attribute.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It allows the field to be used in $filter queries (e.g., Category eq 'Books').",
                "explanation": "Filterable fields are indexed such that the search engine can efficiently narrow down results based on specific values.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It allows the field to be searched using full-text search.",
                "explanation": "This is the purpose of the 'Searchable' attribute.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It makes the field encrypted.",
                "explanation": "Encryption is handled by service settings or customer-managed keys, not the 'Filterable' attribute.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 165,
        "question": "You want to store the results of an Azure AI Search enrichment pipeline (e.g., a list of extracted entities) permanently in Azure Storage for further analysis. Which feature should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Search Index",
                "explanation": "The index is for search queries; it is not meant for long-term analytical storage outside of the search context.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Knowledge Store",
                "explanation": "A Knowledge Store allows you to 'sink' the data enriched by a skillset into Azure Tables or Blobs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Suggester",
                "explanation": "Suggesters are used for auto-complete and type-ahead functionality.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Scoring Profile",
                "explanation": "Scoring profiles are used to boost certain results in a search query.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 166,
        "question": "Which Azure AI Search skill would you add to a skillset to extract text from an image file (e.g., a JPG scan of a letter) stored in a Blob container?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Entity Recognition Skill",
                "explanation": "Entity Recognition finds names and places in existing text; it doesn't extract text from pixels.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "OCR Skill",
                "explanation": "The OCR (Optical Character Recognition) skill is specifically designed to recognize text within image files during the indexing process.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Image Analysis Skill",
                "explanation": "Image Analysis provides captions and tags for the content of an image, but the OCR skill is what extracts the actual words.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Key Phrase Extraction Skill",
                "explanation": "This identifies important concepts in text but does not perform image-to-text conversion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 167,
        "question": "You have 50 different variations of a shipping form. You want to extract fields with high accuracy even if the form layout changes slightly. Which Document Intelligence model type should you choose?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Custom Template model",
                "explanation": "Template models are very sensitive to layout changes and are best for documents with a fixed structure.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/2-understand-custom-models"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Custom Neural model",
                "explanation": "Custom Neural models use deep learning to understand the document structure and are much more resilient to layout variations.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/2-understand-custom-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Prebuilt ID model",
                "explanation": "Prebuilt ID models are for passports and licenses, not for custom shipping forms.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/2-understand-custom-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Read model",
                "explanation": "The Read model only provides OCR and does not extract structured fields.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/2-understand-custom-models"
            }
        ]
    },
    {
        "id": 168,
        "question": "In Azure AI Search, what does a 'Language Analyzer' do differently than a 'Standard Analyzer'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It translates the search results.",
                "explanation": "Analyzers are for processing index text, not for runtime translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It performs language-specific lemmatization and stemming (e.g., matching 'running' to 'run').",
                "explanation": "Language analyzers understand the grammar and word variations of a specific language to improve search recall.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It increases the indexing speed.",
                "explanation": "Analyzers usually make indexing slightly slower because of the extra processing required.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It encrypts the text field.",
                "explanation": "Analyzers are for text processing, not security.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 169,
        "question": "You want to provide a 'Did you mean?' or auto-complete feature as users type into your search bar. Which index component must you configure?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Suggester",
                "explanation": "A Suggester defines the fields and the algorithm used to provide type-ahead results.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Indexer",
                "explanation": "The indexer moves data, but the Suggester handles the type-ahead logic during a query.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Facet",
                "explanation": "Facets are used for categories and counts, not for auto-complete.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Skillset",
                "explanation": "Skillsets are for AI enrichment during indexing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 170,
        "question": "A company has five different types of medical forms. They want to use one API endpoint to process all five types. What should they create in Document Intelligence?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "A Prebuilt Health model",
                "explanation": "If the forms are proprietary, the prebuilt model might not capture the specific fields needed.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/2-understand-custom-models"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A Composed model",
                "explanation": "A composed model combines multiple custom models into a single ID, and automatically selects the correct one for the input document.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/2-understand-custom-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A single Neural model trained on all five types mixed together.",
                "explanation": "While possible, a composed model is the architectural best practice for multi-document type scenarios.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/2-understand-custom-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A Read model.",
                "explanation": "The Read model does not provide field extraction.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/2-understand-custom-models"
            }
        ]
    },
    {
        "id": 171,
        "question": "You want your search results to prioritize (boost) documents that have been recently published. Which Azure AI Search feature should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Sorting",
                "explanation": "Sorting strictly re-orders results; it doesn't influence the relevance score (ranking) based on weights.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Scoring Profile with a Freshness function.",
                "explanation": "Scoring profiles allow you to boost the ranking of documents based on numeric or date-based fields.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Semantic Ranking",
                "explanation": "Semantic ranking improves conceptual relevance but isn't specifically for boosting based on a date field.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Synonyms",
                "explanation": "Synonyms expand the query terms; they do not affect date-based ranking.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 172,
        "question": "Which Azure AI Search feature allows you to ensure that a search for 'cellphone' also returns results for 'mobile phone'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Suggester",
                "explanation": "Suggesters are for auto-complete, not term expansion.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Synonym Map",
                "explanation": "A synonym map defines groups of equivalent terms to ensure consistent search results regardless of which term the user typed.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Facet",
                "explanation": "Facets provide navigation categories, not synonym mapping.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Skillset",
                "explanation": "Enrichment skillsets can extract entities, but synonym expansion happens at the index/query level.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 173,
        "question": "A developer needs to extract the date of birth and passport number from scans of international passports. Which Document Intelligence model should they use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Read model",
                "explanation": "The Read model only provides raw text and does not categorize fields like 'Passport Number'.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Prebuilt ID model",
                "explanation": "The prebuilt ID model is specifically optimized for passports and driver's licenses from many countries.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/4-financial-id-tax-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Invoice model",
                "explanation": "The Invoice model is for business invoices, not identity documents.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/4-financial-id-tax-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Layout model",
                "explanation": "The Layout model extracts tables and lines but does not map them to semantic ID fields.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            }
        ]
    },
    {
        "id": 174,
        "question": "What is the benefit of enabling 'Incremental Enrichment' (caching) in an Azure AI Search indexing pipeline?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "It reduces cost and time by only running AI skills on documents that have changed.",
                "explanation": "Caching stores the enrichment results, so you don't pay for or wait for expensive AI operations on unchanged files.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "It makes the search queries faster for end users.",
                "explanation": "Caching improves indexing performance, not the runtime query performance.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It encrypts the index.",
                "explanation": "Caching is for performance/cost optimization, not encryption.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It allows more users to search at the same time.",
                "explanation": "Concurrency is handled by scaling replicas, not by indexing caches.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 175,
        "question": "Which Azure AI Search feature provides a count of results for each category (e.g., 'Author: King (15)') in a sidebar?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Suggesters",
                "explanation": "Suggesters are for auto-complete.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Facets",
                "explanation": "Facets provide a list of values and their hit counts for specific fields, enabling faceted navigation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Sorting",
                "explanation": "Sorting re-orders results but does not provide counts or categories.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Scoring Profiles",
                "explanation": "Scoring profiles influence ranking; they do not generate categories.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 176,
        "question": "In Document Intelligence, if a field extraction returns a 'confidence score' of 0.35, what should the application logic typically do?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Trust the result completely.",
                "explanation": "A score of 0.35 is very low and indicates a high probability of error.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Flag the result for human review or request a clearer scan.",
                "explanation": "Applications should use confidence thresholds to ensure data accuracy by involving humans in low-confidence cases.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Delete the document automatically.",
                "explanation": "Automatic deletion might lose valuable data; human review is a better first step.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Translate the field.",
                "explanation": "Translation does not fix a low-confidence extraction error.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            }
        ]
    },
    {
        "id": 177,
        "question": "You have thousands of mixed-language documents in a Blob container. Which AI skill should be the FIRST skill in your skillset to ensure downstream skills work correctly?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Key Phrase Extraction Skill",
                "explanation": "Key phrase extraction works best when it knows which language to analyze.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Language Detection Skill",
                "explanation": "By detecting the language first, you can pass that language code to subsequent skills (like OCR or Sentiment) to improve their accuracy.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Entity Recognition Skill",
                "explanation": "Entity recognition is language-dependent; identifying the language first is standard practice.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Merge Skill",
                "explanation": "The Merge skill is for combining text and images, not for language analysis.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 178,
        "question": "A search index field is marked as 'Searchable' but NOT 'Retrievable'. What is the result?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The field cannot be searched.",
                "explanation": "It is marked as 'Searchable', so it will be included in full-text search queries.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "You can search for the values in the field, but the values will not be included in the JSON results returned to the user.",
                "explanation": "Retrievable determines if a field can be 'seen' in the output, while Searchable determines if its content is indexed for matching.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The field is only visible to admins.",
                "explanation": "Retrievable settings apply to all search queries, not specific user roles.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The field is deleted after indexing.",
                "explanation": "Data remains in the index; it is just not returned in query responses.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 179,
        "question": "You need to extract data from a complex table spanning three pages in a document. Which Document Intelligence model should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Read model",
                "explanation": "Read provides lines of text but does not preserve the logical structure of rows and columns in a table.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Layout model",
                "explanation": "The Layout model is specifically designed to extract text, tables, and selection marks with structural integrity.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Receipt model",
                "explanation": "Receipt models extract specific retail fields, but they are not generalized for multi-page complex tables.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "PII Detection Skill",
                "explanation": "PII detection is for identifying sensitive entities, not for structural table extraction.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            }
        ]
    },
    {
        "id": 180,
        "question": "Which scaling setting in Azure AI Search determines how many concurrent queries the service can handle?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Partitions",
                "explanation": "Partitions increase storage capacity and indexing speed by spreading data across more units.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Replicas",
                "explanation": "Replicas provide extra copies of the index, which improves query throughput and provides high availability.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Skillsets",
                "explanation": "Skillsets do not affect scaling for query concurrency.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Analyzers",
                "explanation": "Analyzers are for text processing, not resource scaling.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 181,
        "question": "You are training a Custom Template model in Document Intelligence. What is the MINIMUM number of sample documents you need for training?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "1 document.",
                "explanation": "One document is not enough to train a model for general recognition.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/3-label-data"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "5 documents.",
                "explanation": "Document Intelligence requires at least 5 sample documents to train a custom model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/3-label-data"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "50 documents.",
                "explanation": "While more is better, 5 is the technical minimum.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/3-label-data"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "1,000 documents.",
                "explanation": "Azure AI services use transfer learning to work with very small datasets.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-custom-form-recognizer-models/3-label-data"
            }
        ]
    },
    {
        "id": 182,
        "question": "You want to add a custom enrichment to your search pipeline that calls an external weather API during indexing. Which skill type should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Built-in Skill",
                "explanation": "Built-in skills only include Microsoft-provided logic like OCR or Sentiment.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Custom Web API Skill",
                "explanation": "Custom Web API skills allow you to extend the pipeline with any logic hosted in an Azure Function or external REST endpoint.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Indexer Skill",
                "explanation": "This is not a recognized category of skill; indexers use skillsets.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Cognitive Services Skill",
                "explanation": "This generally refers to built-in skills; the term for external logic is Custom Web API Skill.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 183,
        "question": "What is the primary benefit of enabling 'Semantic Search' (Semantic Ranking) in Azure AI Search?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "It reduces the cost of each search query.",
                "explanation": "Semantic search actually adds a small cost because of the advanced L2 ranking models used.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "It improves the relevance of the top results by re-ranking them based on conceptual meaning.",
                "explanation": "Semantic ranking uses deep learning to identify the best answers based on user intent rather than just keyword frequency.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "It translates the search index into multiple languages.",
                "explanation": "Ranking does not involve translation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It deletes duplicate search results.",
                "explanation": "Relevance ranking does not perform de-duplication.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 184,
        "question": "Document Intelligence prebuilt models extract 'Selection Marks'. What are these?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The user's signature.",
                "explanation": "Signatures are categorized as a different extraction type.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Checkboxes and radio buttons.",
                "explanation": "Selection marks identify whether a checkbox or radio button has been ticked or selected.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Page numbers.",
                "explanation": "Page numbers are extracted as standard text fields.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Company logos.",
                "explanation": "Logos are identified by general vision models, but selection marks specifically refers to form inputs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            }
        ]
    },
    {
        "id": 185,
        "question": "Which data source in Azure AI Search supports 'Change Tracking' to automatically index only new rows without a full refresh?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Local CSV files.",
                "explanation": "Local files do not support Azure-native indexer change tracking.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure SQL Database.",
                "explanation": "Azure SQL has built-in change tracking mechanisms that the search indexer can leverage for incremental updates.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Public websites.",
                "explanation": "Web crawlers usually require a full scan unless the site supports specific sitemap change headers.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Table Storage.",
                "explanation": "While it supports indexing, the change tracking in Azure SQL is more robust and specifically highlighted in AI-102 training.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 186,
        "question": "An indexer fails with an 'Out of Memory' error. What should you do to scale the indexing process specifically?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Add more Replicas.",
                "explanation": "Replicas help with query throughput, not memory for indexing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Add more Partitions.",
                "explanation": "Partitions provide more physical resources (CPU and Memory) for indexing tasks.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Create a new Skillset.",
                "explanation": "A new skillset might use *more* memory depending on its complexity.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Decrease the number of fields in the index.",
                "explanation": "While this saves some memory, adding partitions is the standard scaling method for this error.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 187,
        "question": "You are mapping fields from a Document Intelligence response into an Azure AI Search index. Which property in the search index schema allows you to store the JSON representation of an extracted table?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Edm.String",
                "explanation": "A string field can store text, but it doesn't preserve structured sub-fields.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Edm.ComplexType",
                "explanation": "ComplexType (or Collection of ComplexType) is used to store nested, structured data in a search index.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Edm.Int32",
                "explanation": "This is for integers.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Edm.Boolean",
                "explanation": "This is for true/false values.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 188,
        "question": "What is 'Knowledge Mining' in the context of the AI-102 exam?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Mining bitcoin using Azure servers.",
                "explanation": "This is not related to AI or information extraction.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The process of extracting insights from massive amounts of unstructured data using AI-powered search.",
                "explanation": "Knowledge mining allows organizations to find hidden patterns and information in files like PDFs, images, and audio.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Searching for minerals in the ground using AI.",
                "explanation": "Knowledge mining refers to digital information processing, not physical mining.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Learning a new language with an AI tutor.",
                "explanation": "This is a learning task, not a data extraction/knowledge mining task.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 189,
        "question": "Can Azure AI Document Intelligence recognize and extract handwritten text?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Yes, both the Read and Layout models support high-accuracy handwriting recognition.",
                "explanation": "Microsoft's latest OCR technology is specifically designed to handle a wide variety of handwriting styles.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "No, it only works for printed text.",
                "explanation": "Handwriting support is a core feature of the service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Yes, but only for the English language.",
                "explanation": "It supports handwriting in multiple languages, including Chinese and Japanese.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "No, you must use a Custom Neural model for handwriting.",
                "explanation": "The standard prebuilt Read and Layout models already include handwriting support.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            }
        ]
    },
    {
        "id": 190,
        "question": "Which Azure AI Search component stores a log of every document processed and any errors encountered during indexing?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Search Index",
                "explanation": "The index contains data, not logs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Indexer Execution History",
                "explanation": "The Indexer execution history provides detailed reports on the status of each indexing run, including success/failure counts and specific error messages.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Suggester",
                "explanation": "Suggesters are for auto-complete functionality.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Knowledge Store",
                "explanation": "Knowledge store stores enriched content, not service operational logs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 191,
        "question": "In a Knowledge Store, what is a 'Projection'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "A definition of how enriched data should be mapped to physical storage like Tables or Blobs.",
                "explanation": "Projections define the shape and destination of the data you want to save from the enrichment pipeline.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "A way to project the search results on a screen.",
                "explanation": "Projection in this context is a data mapping term.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A search query to find documents.",
                "explanation": "Projections happen during indexing, not during a query.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "A method to delete old data.",
                "explanation": "Projections are for storing data, not deleting it.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 192,
        "question": "Which of these is a requirement for using a Managed Identity to connect Azure AI Search to an Azure Storage account?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The storage account must be in a different region.",
                "explanation": "Region location is not a requirement for identity management.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The search service identity must be granted 'Storage Blob Data Reader' role on the storage account.",
                "explanation": "Managed Identity requires specific RBAC permissions to ensure the service can read the data without a key.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "You must use an API key in the connection string.",
                "explanation": "Managed identity specifically replaces the need for API keys in the connection string.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The storage account must be public.",
                "explanation": "Identity management is often used specifically so that storage accounts can remain private/firewalled.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 193,
        "question": "When querying Azure AI Search, what is the 'searchScore' field in the JSON response?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The price of the search query.",
                "explanation": "Pricing is not included in the search results object.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "A numerical value representing how relevant the document is to the search query.",
                "explanation": "Higher search scores indicate a better match based on the ranking algorithm (e.g., BM25).",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The number of users who clicked the result.",
                "explanation": "Click data is part of Search Traffic Analytics, not the standard searchScore.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The page number of the document.",
                "explanation": "Page numbers are document content, not a relevance score.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 194,
        "question": "You are creating a skillset. What does the 'context' property of a skill (e.g., '/document/pages/*') determine?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The security context for the API call.",
                "explanation": "Context in skillsets refers to the scope of data processing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The level at which the skill is executed (e.g., once per document or once per page).",
                "explanation": "The context defines the granularity of the AI processing. '/document' runs once per file; '/document/pages/*' runs for every page identified.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The language of the document.",
                "explanation": "Language is a data value, not a structural execution context.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The physical location of the storage account.",
                "explanation": "Context is a logical path within the document's enriched tree structure.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 195,
        "question": "In Document Intelligence, what is a 'Bounding Box'?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "The four coordinates that define the physical area of an extracted word or table on the page.",
                "explanation": "Bounding boxes are used to visually highlight where information was found in the original document.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "A physical box used to ship documents.",
                "explanation": "Bounding boxes are a digital coordinate system.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "A security boundary around the model.",
                "explanation": "Security boundaries are managed by VNETs or firewalls.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "The file size limit for a PDF.",
                "explanation": "Bounding boxes refer to visual locations, not file limits.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            }
        ]
    },
    {
        "id": 196,
        "question": "What happens if you increase the number of 'Partitions' in an Azure AI Search service?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Query latency decreases for every user.",
                "explanation": "Replicas are better for decreasing latency; partitions help with storage and large-scale indexing.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "You gain more storage space and faster indexing through parallel processing.",
                "explanation": "Partitions allow you to scale out the physical storage and the compute resources used for indexing massive datasets.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The service becomes cheaper.",
                "explanation": "Adding partitions increases the service cost.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "It automatically translates the index.",
                "explanation": "Scaling does not change the content logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 197,
        "question": "Which query syntax should you use in Azure AI Search if you want to perform complex searches like fuzzy matching, proximity search, and regex?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Simple Query Syntax",
                "explanation": "Simple syntax is for basic keyword matching and doesn't support advanced operators like regex.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Full Lucene Query Syntax",
                "explanation": "Setting queryType=full enables the Lucene parser, which supports a wide range of advanced search scenarios.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "SQL Query Syntax",
                "explanation": "Azure AI Search uses its own specialized syntax, not standard SQL.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "OData Query Syntax",
                "explanation": "OData is used for filtering and ordering, but not for the actual full-text search logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 198,
        "question": "A clinic needs to extract patient names and insurance numbers from photos of health insurance cards. Which Document Intelligence prebuilt model is best?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/build-id-solution-form-recognizer/",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Prebuilt Invoice model",
                "explanation": "Insurance cards are not invoices.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/4-financial-id-tax-models"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Prebuilt Health Insurance Card model",
                "explanation": "There is a specific prebuilt model for US health insurance cards.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/4-financial-id-tax-models"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Prebuilt ID model",
                "explanation": "The ID model is for passports and licenses, not insurance cards.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/4-financial-id-tax-models"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Layout model",
                "explanation": "The Layout model doesn't map fields to patient/insurance categories.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            }
        ]
    },
    {
        "id": 199,
        "question": "What is the maximum file size for a document to be processed by an Azure AI Search indexer (depending on the service tier)?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "1 GB for all tiers.",
                "explanation": "Limits vary significantly by tier; the Free tier is much lower.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Limits vary by tier (e.g., 16 MB for Free, up to many GBs for higher tiers).",
                "explanation": "Standard tiers support much larger files for indexing than basic or free tiers.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "There is no limit.",
                "explanation": "Every Azure service has resource limits.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Exactly 100 MB for everyone.",
                "explanation": "Limits are tier-dependent.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 200,
        "question": "Which role should a user be assigned to allow them to query an Azure AI Search index but NOT modify its configuration or data?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/implement-knowledge-mining-azure-cognitive-search/",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Search Service Contributor",
                "explanation": "Contributors can modify the resource settings and configuration.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Search Index Data Reader",
                "explanation": "The Search Index Data Reader role is designed specifically for end-users who only need read access to index content.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Search Index Data Contributor",
                "explanation": "Data Contributors can write data to the index.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Owner",
                "explanation": "Owners have full control over the resource.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            }
        ]
    },
    {
        "id": 201,
        "question": "You need to select an Azure service for a solution that will generate natural‑language responses using a foundation model and also support image generation for marketing content. Which two services from Azure AI Foundry should you provision? (Choose two)",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Vision",
                "explanation": "Azure AI Vision is used for analyzing existing images (tags, OCR, objects), not for generating new images or natural language responses.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/2-understand-resources"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure OpenAI in Foundry Models",
                "explanation": "Azure OpenAI provides foundation models (like GPT-4) specifically designed for generating natural language responses.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/2-understand-openai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure AI Search",
                "explanation": "Azure AI Search is a retrieval service for indexing and searching data, not a generative foundation model service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "DALL‑E in Azure OpenAI",
                "explanation": "DALL-E is the specific foundation model within Azure OpenAI used for generating images from natural language descriptions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
    {
        "id": 202,
        "question": "A retailer wants to detect customer movements in a store to improve layout design. Which service should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Azure AI Vision Spatial Analysis",
                "explanation": "Spatial Analysis is a feature of Azure AI Vision that analyzes real-time video to detect people's presence and movements in a physical space.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/4-detect-objects"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure AI Speech",
                "explanation": "Azure AI Speech handles audio transcription and translation, which is irrelevant to physical movement detection.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/2-understand-speech-to-text"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure AI Search vector store",
                "explanation": "Vector stores are for searching high-dimensional data, not for tracking live human movement in a store.",
                "source": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/2-understand-solution"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure AI Document Intelligence",
                "explanation": "This service is for extracting text and fields from structured documents like forms and receipts.",
                "source": "https://learn.microsoft.com/en-us/training/modules/use-prebuilt-form-recognizer-models/2-understand-prebuilt-models"
            }
        ]
    },
    {
        "id": 203,
        "question": "When planning a generative AI solution using Azure OpenAI, which actions support Responsible AI and content moderation? (Choose two)",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Configure content safety filters and blocklists",
                "explanation": "Content safety filters are a core component of Responsible AI, ensuring that generated content does not violate safety policies.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Optimize and manage resource scalability",
                "explanation": "Scalability is a performance and operational concern, not a principle of Responsible AI or content moderation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Implement prompt shields and harm detection",
                "explanation": "Prompt shields protect against jailbreak attacks and malicious injections, fulfilling the safety requirement of Responsible AI.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use DALL‑E to generate images only at test time",
                "explanation": "Using a model only at test time is a development choice and does not constitute a content moderation or governance framework.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/3-responsible-ai"
            }
        ]
    },
    {
        "id": 204,
        "question": "You need to extract key phrases, entities, sentiment, and PII from a set of documents. Which Azure AI service should you use?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure AI Vision",
                "explanation": "Azure AI Vision is for image processing, not for analyzing structured or unstructured text for sentiment and PII.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Azure AI Language",
                "explanation": "Azure AI Language contains all the necessary features (sentiment, NER, key phrase, PII) for unstructured text analysis.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure AI Search",
                "explanation": "Azure AI Search is for building a search engine; while it can use Language features during indexing, the features themselves belong to the Language service.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure AI Speech",
                "explanation": "Azure AI Speech is used for transcribing spoken audio to text, not for the semantic analysis of existing documents.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/2-detect-language-sentiment"
            }
        ]
    },
    {
        "id": 205,
        "question": "You want to build a computer vision solution that analyzes images for tags, objects, and text. What steps should you perform to create and deploy the appropriate Azure AI service?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-solutions-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Provision an Azure AI Vision resource, specify visual features in the API request, and interpret the response.",
                "explanation": "This is the standard workflow for consuming the pre-trained Azure AI Vision API for tagging and object detection.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Provision an Azure AI Document Intelligence resource, train a custom model, and evaluate model metrics.",
                "explanation": "Document Intelligence is for extracting data from forms, not for general image tagging or scene analysis.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Provision an Azure AI Search resource, create an index, and perform ranking.",
                "explanation": "Search provides data retrieval; it doesn't perform the underlying computer vision analysis.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Provision an Azure AI Speech resource, configure SSML, and deploy a custom voice model.",
                "explanation": "Speech resources are entirely unrelated to image tagging and computer vision.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/3-analyze-images"
            }
        ]
    },
    {
        "id": 206,
        "question": "What configuration options can be used to control the behavior of an Azure OpenAI model?",
        "learningPath": "https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps-azure/",
        "module": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Adjust temperature and top‑p sampling parameters",
                "explanation": "Temperature and Top-P are the primary parameters for controlling the randomness and creativity of OpenAI completions.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Use vector index queries to limit results",
                "explanation": "Vector index queries are used in the Search service to retrieve data, not to control the foundation model's behavior directly.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Modify the cognitive services endpoint region",
                "explanation": "Region affects availability and latency, but doesn't change how the model processes a prompt.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Enable DALL‑E image generation",
                "explanation": "This selects a different model entirely; it is not a configuration parameter for a specific text model's behavior.",
                "source": "https://learn.microsoft.com/en-us/training/modules/get-started-openai/4-work-with-openai"
            }
        ]
    },
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
                "explanation": "Azure AI Search is the most suitable solution because it provides the required functionality for accessing and analyzing external documents with built-in skills, which aligns with the scenario\'s needs.",
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
                "explanation": "Deploying a containerized image is not necessary to configure the agent\'s capabilities for this scenario.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Set up a SQL database.",
                "explanation": "Setting up a SQL database is not required for configuring the agent\'s interaction capabilities, as it does not directly contribute to the goal of automating customer support workflows.",
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
    }

]
