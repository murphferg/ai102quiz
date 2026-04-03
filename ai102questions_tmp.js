const questionPool = [
    {
        "id": 275,
        "question": "Your team is deploying an agent using the Microsoft Foundry Agent Service to perform actions such as scheduling meetings and sending notifications. You need to integrate tools that enable it to perform these actions programmatically. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-azure-ai-foundry-agent-service/4-extend-agent-capabilities-tools",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Add custom functions.",
                "explanation": "Adding custom functions (tools) enables the AI agent to dynamically execute specific programmatic actions like scheduling or notifications based on the conversation context.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Configure static templates.",
                "explanation": "Static templates do not provide the necessary logic for the agent to execute dynamic external actions programmatically.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Enable default model capabilities.",
                "explanation": "Default models are engines for text generation; they lack the built-in ability to interact with your specific external business systems without custom tool integration.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use a pre-trained chatbot framework.",
                "explanation": "A framework alone doesn\'t grant access to your specific backend APIs without the implementation of custom functions or plugins.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 276,
        "question": "Your organization plans to deploy a generative AI solution using Azure OpenAI with GPT-4. You need to ensure GPT-4 is available for inferencing via an endpoint. Which three actions should you perform? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/explore-models-azure-ai-studio/3-deploy-model",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Create a new Azure subscription.",
                "explanation": "This is an account management task and is not part of the technical deployment workflow for a specific model.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Deploy a GPT-4 model.",
                "explanation": "Creating a deployment makes the model accessible via a unique endpoint for your applications.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Provision a Microsoft Foundry resource.",
                "explanation": "The Foundry (or Azure OpenAI) resource provides the necessary infrastructure and security boundary to host model deployments.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Select GPT-4 from the catalog.",
                "explanation": "You must select the specific model and version from the catalog before you can configure its deployment.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "Set up a virtual machine.",
                "explanation": "Azure OpenAI and Foundry use managed endpoints; there is no need to manually manage VMs to host these models.",
                "source": "Sample Test"
            },
            {
                "id": 6,
                "correct": false,
                "answer": "Use DALL-E.",
                "explanation": "DALL-E is for image generation, not for natural language responses as required by the GPT-4 goal.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 277,
        "question": "You are building a GPT-based chat application using the \'Using your data\' feature. While testing, you discover that some responses are not accurate enough. You need to filter out less-relevant documents. Which parameter should you configure?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/use-your-data",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Content data",
                "explanation": "This identifies the fields containing text, not the threshold for what is considered relevant.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "File name",
                "explanation": "The file name field is used for source citations, not for filtering logic.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Retrieved documents",
                "explanation": "This controls the count of documents used, but does not apply a quality filter to individual document scores.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Strictness",
                "explanation": "The Strictness parameter sets the threshold for relevance; higher values filter out documents that are only marginal matches to the query.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 278,
        "question": "Your organization is developing an application connected to a Microsoft Azure AI Search index. You need to configure the application to retrieve relevant data by interpreting the meaning behind query terms. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/make-your-data-searchable/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Deploy an additional Azure OpenAI model.",
                "explanation": "An additional generative model doesn\'t improve the underlying search index\'s retrieval logic.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Enable semantic search.",
                "explanation": "Semantic search enhances precision by understanding the intent and meaning behind terms rather than just performing literal keyword matching.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Increase chunk size for data ingestion.",
                "explanation": "Chunk size affects data processing but does not enable conceptual understanding during retrieval.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Use keyword search.",
                "explanation": "Keyword search lacks the semantic capabilities required to interpret meaning behind query terms.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 279,
        "question": "You are building an app that will use the Custom Vision API to detect when all spaces in a parking lot are empty. Which feature of the API should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images-custom-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "image classification",
                "explanation": "Classification identifies if an object is in the whole image, but won\'t help you count individual spaces or pinpoint their empty state relative to their location.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "image description",
                "explanation": "Image description generates a human-readable phrase, which is not structured enough for automated parking space monitoring logic.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "object detection",
                "explanation": "Object detection returns the coordinates (bounding boxes) of identified objects, allowing you to track specific parking slots individually.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 280,
        "question": "You are building a solution using Azure AI Search. You need to define field attributes where search results will include a hit count by category. Which attribute should you assign?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "facetable",
                "explanation": "The facetable attribute allows the search service to provide a list of values and a count of how many times each value appeared in the results.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "filterable",
                "explanation": "Filterable allows the field to be used in a $filter query to narrow down results, but doesn\'t provide hit counts.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "key",
                "explanation": "The key attribute is the unique identifier for documents in the index.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 281,
        "question": "You are building a solution using Azure AI Search and need to save normalized binary files as projections. Which type of projection should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-azure-cognitive-search-solution/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "files",
                "explanation": "The files projection type is used specifically when you need to save normalized, binary versions of image files identified during enrichment.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "objects",
                "explanation": "Object projections save the full JSON representation of enriched data, not binary files.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "tables",
                "explanation": "Table projections are used for structured data mapping to Azure Table Storage.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 282,
        "question": "You have a document that contains one positive sentence and multiple neutral sentences. Which sentiment label will the Azure Language service return for the WHOLE document?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-azure-ai-language/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "mixed",
                "explanation": "Mixed sentiment requires at least one positive and one negative sentence.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "negative",
                "explanation": "The document contains no negative sentences.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "neutral",
                "explanation": "If even one positive sentence is present alongside neutral ones, the overall document label shifts from neutral to positive.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "positive",
                "explanation": "In Azure Language sentiment logic, the presence of any positive sentences in an otherwise neutral document results in a positive document label.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 283,
        "question": "You need to extend an app using Azure Translator. Which three features are available in the Translator service? (Choose three)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Detect language",
                "explanation": "The Translator service includes functionality to automatically identify the source language of a text string.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Dictionary lookup",
                "explanation": "This feature provides alternate translations for a word or phrase, showing how a word is used in different contexts.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Entity extraction",
                "explanation": "Entity extraction is a feature of the Azure AI Language service, not the Translator service.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Intent recognition",
                "explanation": "Intent recognition is part of Conversational Language Understanding (CLU), not Translator.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": true,
                "answer": "Transliterate",
                "explanation": "Transliteration converts text from one script to another (e.g., Arabic to Latin characters) within the same language.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 284,
        "question": "You plan to transcribe large quantities of audio files using batch transcription. Which storage solution must you use for the source files to minimize development effort?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Cosmos DB",
                "explanation": "Cosmos DB is not the native storage source supported for batch speech transcription.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Data Lake Storage",
                "explanation": "While it can store files, standard Azure Storage is the default and simplest integration point for the batch API.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Azure SQL Database",
                "explanation": "SQL databases are for structured relational data, not for binary audio file ingestion in transcription tasks.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "Azure Storage",
                "explanation": "Azure Storage (Blob Containers) is the primary storage provider supported by default for batch transcription requests.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 285,
        "question": "You are building an orchestration workflow for a bot. Which two operations are permitted in an orchestration project? (Choose two)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-language-understanding-model/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Add entities to your orchestration workflow directly.",
                "explanation": "Orchestration workflows route intents; you do not add or label entities directly within the orchestration project itself.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Connect to Language Understanding applications in the same resource.",
                "explanation": "Orchestration workflows are designed to connect to and coordinate multiple CLU or legacy LUIS apps under the same resource.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Connect to question answering projects in the same resource.",
                "explanation": "The orchestration workflow can route queries to specific Question Answering projects to resolve informational requests.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Label a single word as two different entities.",
                "explanation": "Entity labeling rules in CLU and orchestration do not allow a single word to be assigned to multiple overlapping entities in this manner.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 286,
        "question": "You need to ensure that uploaded images do not contain adult content while minimizing development effort. Which service should you use?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-images-computer-vision/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Face service",
                "explanation": "The Face service focuses on human features and identity, not broad content safety categories like adult content.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure AI Custom Vision",
                "explanation": "Custom Vision would require you to manually collect and label thousands of images of adult content, which is high effort.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Azure Vision Image Analysis",
                "explanation": "Azure Vision\'s pre-trained Image Analysis API can automatically detect and score adult content category with zero custom training required.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Vision Spatial Analysis",
                "explanation": "Spatial Analysis is for tracking movement in video feeds, not for content safety flagging of static images.",
                "source": "Sample Test"
            }
        ]
    }
]