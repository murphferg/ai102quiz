const questionPool = [
    {
        "id": 221,
        "question": "You are building an app that will analyze resumes and remove names and addresses. You need to configure the Azure Language Personally Identifiable Information (PII) detection feature for the app. Which categories should you specify in the request?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/publish-use-language-understanding-app/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Person, Address, and IP",
                "explanation": "Specifying IP would remove IP addresses, which is not required for this specific task of removing only names and addresses.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Person and Address only",
                "explanation": "Person and Address categories will specifically detect and allow for the removal of names and physical addresses as required by the scenario.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Person, PersonType, and Address",
                "explanation": "PersonType would remove job roles (e.g., \'Software Engineer\'), which is not part of the requirement to remove only names and addresses.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 222,
        "question": "You are building an Azure Translator custom model and need to ensure that the translation accuracy has a Bilingual Evaluation Understudy (BLEU) score indicating high quality. What is the minimum score range required?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "0 to 19",
                "explanation": "This range indicates a low-quality translation that is likely difficult to understand.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "20 to 39",
                "explanation": "This range indicates a marginal translation quality.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "40 to 59",
                "explanation": "A BLEU score between 40 and 60 is the standard range that indicates a high-quality, fluent translation.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "80 to 100",
                "explanation": "While higher is theoretically better, a score in this range is rarely achieved in real-world scenarios and is not the standard minimum for \'high quality\'.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 223,
        "question": "You have an app that sends audio recordings from a call center to Azure Speech. During testing, you notice that the Word Error Rate (WER) is high due to substitution errors. What should you add to the training data to reduce the WER?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "custom product and people names",
                "explanation": "Substitution errors occur when the model misidentifies a word as another. Adding domain-specific terminology like product and people names helps the model recognize them correctly.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "overlapping speakers",
                "explanation": "Overlapping speakers typically cause deletion errors (where the model fails to capture words) rather than substitution errors.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "people talking in the background",
                "explanation": "Background speech usually leads to insertion errors, where the model transcribes words that weren\'t part of the primary audio.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 224,
        "question": "You are building an app that enables users to create notes by using speech. You need a model that supports noisy environments, such as a factory floor. Which model should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps-with-azure-speech-service/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "base",
                "explanation": "The base model is optimized for general environments and may perform poorly with heavy factory background noise.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "base with customizations",
                "explanation": "While this is a step up, the term specifically for this scenario in Azure is a custom speech-to-text model.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "custom speech-to-text",
                "explanation": "A custom speech-to-text model allows you to train the service on specific audio data containing the ambient noise of the target environment (the factory floor).",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "default",
                "explanation": "The default model is equivalent to the base model and is not specialized for noisy conditions.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 225,
        "question": "You are building a multilingual conversational app using Conversational Language Understanding (CLU). You need to optimize the performance of the model while minimizing development effort. What should you do?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-language-understanding-model/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Add utterances for languages that are performing poorly in the model.",
                "explanation": "CLU supports multilingual models within a single project. Adding targeted utterances for poorly performing languages is the most efficient optimization strategy.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Configure the app to only query utterances in the language used to train the model.",
                "explanation": "This restricts the app\'s functionality and does not optimize the model\'s multilingual capabilities.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Create separate projects for each language.",
                "explanation": "Creating separate projects increases administrative and development effort, which contradicts the requirement to minimize effort.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Train the model using utterances in multiple languages and only query the model using the project language.",
                "explanation": "CLU doesn\'t require querying in a single \'project language\'; you can query in any supported language.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 226,
        "question": "You are building a chatbot using the Azure Language question answering service. Which two parameters will influence the operational costs? (Choose two)",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/build-question-answering-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "the number of assigned metadata tags",
                "explanation": "Metadata tags are used for filtering but do not directly impact the billing tier or operational cost.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "the number of knowledge base editors",
                "explanation": "Editor counts are related to access control (RBAC) and do not affect the service\'s transaction or storage costs.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "the number of supported languages",
                "explanation": "Question answering supports multiple languages, but the cost is determined by scale and throughput, not the language count.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "the required throughput",
                "explanation": "Higher throughput requires a higher pricing tier to handle the volume of requests, directly influencing cost.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": true,
                "answer": "the size and the number of knowledge bases",
                "explanation": "The storage size and the total number of knowledge bases hosted in the resource determine the required Azure AI Search tier and pricing.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 227,
        "question": "You are building a GPT-based chat application and plan to use the \'Using your data\' feature to ground the model. Which four types of files can you use? (Choose four)",
        "learningPath": "Sample Test",
        "module": "Sample Test",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "HTML",
                "explanation": "HTML files are supported for grounding models in the \'Using your data\' feature.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "MD",
                "explanation": "Markdown (.md) files are supported for ingestion and grounding.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "PDF",
                "explanation": "PDF documents are one of the primary supported formats for this feature.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": true,
                "answer": "TXT",
                "explanation": "Plain text files are supported for grounding the model with company data.",
                "source": "Sample Test"
            },
            {
                "id": 5,
                "correct": false,
                "answer": "XML",
                "explanation": "XML files are currently not supported for the \'Using your data\' grounding feature.",
                "source": "Sample Test"
            },
            {
                "id": 6,
                "correct": false,
                "answer": "ZIP",
                "explanation": "Compressed ZIP files cannot be used directly; files must be extracted into supported formats first.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 228,
        "question": "You are building a solution that uses Azure AI Search and need to create a skillset definition. What are the minimum sections you should include in the definition?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/create-custom-skill-for-azure-cognitive-search/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "name, description, and skills",
                "explanation": "A skillset definition requires a name, a description, and the array of skills to be executed. Other sections like knowledgeStore are optional.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "name, description, knowledgeStore, and encryptionKey",
                "explanation": "This list misses the mandatory \'skills\' section and includes optional components.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "name, description, skills, and cognitiveServices",
                "explanation": "cognitiveServices is only required for billable skills that call specific APIs, but it is not a structural minimum for every skillset.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "name, description, skills, knowledgeStore, and encryptionKey",
                "explanation": "While this is a complete definition, the question asks for the MINIMUM required sections.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 229,
        "question": "Your company receives documents that need to be classified into predefined categories before extracting data. Which solution should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-financial-id-tax-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Vision OCR",
                "explanation": "OCR only extracts text from images; it does not perform categorization of document types.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Custom classification model in Azure Document Intelligence",
                "explanation": "The custom classification model is designed specifically to categorize documents into predefined classes, enabling accurate routing for data extraction.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Custom template model in Azure Document Intelligence",
                "explanation": "Template models are for extracting data from a specific known layout, not for the initial classification step.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Invoice model in Azure Document Intelligence",
                "explanation": "The Invoice model is a prebuilt model for a specific document type, not a general tool for classifying multiple different document categories.",
                "source": "Sample Test"
            }
        ]
    },
    {
        "id": 230,
        "question": "You need to extract text, tables, and selection marks from multi-page PDF documents while maintaining the structure. Which Azure Document Intelligence model should you recommend?",
        "learningPath": "Sample Test",
        "module": "https://learn.microsoft.com/en-us/training/modules/use-general-document-read-layout-models/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Vision OCR",
                "explanation": "Azure Vision OCR lacks advanced features like structural table recognition and selection mark detection.",
                "source": "Sample Test"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure Document Intelligence general model",
                "explanation": "The general model focuses on entity extraction rather than preserving complex page structure like tables.",
                "source": "Sample Test"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Azure Document Intelligence layout model",
                "explanation": "The layout model is specifically built to extract structured data (tables, selection marks, and text) while preserving the logical structure of the document.",
                "source": "Sample Test"
            },
            {
                "id": 4,
                "correct": false,
                "answer": "Azure Document Intelligence read model",
                "explanation": "The read model is optimized for text extraction (printed and handwritten) but does not handle tables or selection marks with high structural accuracy.",
                "source": "Sample Test"
            }
        ]
    }
]