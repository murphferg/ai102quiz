const questionPool = [
    {
        "id": 1,
        "question": "What is a primary responsibility of an AI solution architect when aligning AI solutions with business goals?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Writing low-level code for neural network training.",
                "explanation": "This is typically the responsibility of a data scientist or machine learning engineer, not an architect focused on business alignment.",
                "source": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Identifying opportunities where AI can drive business value and ensuring technical feasibility.",
                "explanation": "The architect\'s role is to bridge the gap between business strategy and technical implementation, ensuring solutions are both valuable and achievable.",
                "source": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Managing the daily IT support tickets for end users.",
                "explanation": "This is an operational support task, whereas an architect focuses on solution design and strategic transformation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/"
            }
        ]
    },
    {
        "id": 2,
        "question": "Which Microsoft technology is primarily used to build and customize AI agents for business productivity without extensive custom coding?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Azure Virtual Machines",
                "explanation": "Virtual machines provide infrastructure but are not a specialized platform for building conversational AI agents.",
                "source": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Azure SQL Database",
                "explanation": "SQL Database is a data storage service, not an agent development environment.",
                "source": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/"
            },
            {
                "id": 3,
                "correct": true,
                "answer": "Microsoft Copilot Studio",
                "explanation": "Copilot Studio is the primary low-code platform for creating, managing, and deploying AI agents and extending Microsoft 365 Copilot.",
                "source": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/"
            }
        ]
    },
    {
        "id": 3,
        "question": "In the context of the Microsoft AI adoption framework, what does the \'Scale\' phase involve?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Expanding AI capabilities across the organization and establishing a Center of Excellence (CoE).",
                "explanation": "The Scale phase focuses on moving beyond initial pilots to drive widespread organizational impact and formal governance.",
                "source": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Shutting down old AI projects to save costs.",
                "explanation": "Scaling is about growth and broader adoption, not the decommissioning of resources.",
                "source": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Testing a single AI prompt in a sandbox environment.",
                "explanation": "Testing a single prompt is part of the initial experimentation or \'Ready\' phase, not the \'Scale\' phase.",
                "source": "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/"
            }
        ]
    },
    {
        "id": 4,
        "question": "When assessing data for grounding an AI agent, which quality refers to the absence of noise, errors, or irrelevant information?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Timeliness",
                "explanation": "Timeliness refers to how up-to-date the data is, not its lack of errors.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Cleanliness",
                "explanation": "Cleanliness is the measure of data quality that ensures information is free from noise and errors, making it usable for grounding.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Availability",
                "explanation": "Availability refers to whether the system can access the data when needed.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/"
            }
        ]
    },
    {
        "id": 5,
        "question": "An organization wants an agent to assist with real-time decision-making during a live customer call. Which non-functional requirement is most critical to evaluate?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Historical data volume",
                "explanation": "While volume matters for training, it is a functional storage requirement rather than the primary constraint for a live call.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Latency",
                "explanation": "For real-time interactions, the time it takes for the agent to respond (latency) is the critical performance factor.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Color scheme of the UI",
                "explanation": "UI aesthetics are not a critical technical non-functional requirement for the agent\'s decision-making logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/"
            }
        ]
    },
    {
        "id": 6,
        "question": "How should business data be organized to ensure it is discoverable and usable by an agentic AI system?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Keep all data in disconnected spreadsheets.",
                "explanation": "Disconnected silos prevent the AI from retrieving comprehensive and accurate information.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Using clear schemas, metadata, and centralized search indexes.",
                "explanation": "Proper indexing and metadata ensure that the agent can quickly find and retrieve the correct data to ground its responses.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Encryption without a decryption key for the AI.",
                "explanation": "If the AI cannot read the data, it cannot use it for grounding or task automation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/"
            }
        ]
    },
    {
        "id": 7,
        "question": "Which metric is used to determine the total direct and indirect costs of an AI solution over its entire lifecycle?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Net Present Value (NPV)",
                "explanation": "NPV is used to calculate the profitability of an investment, not the total cost of ownership.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Total Cost of Ownership (TCO)",
                "explanation": "TCO encompasses all costs, including development, licensing, token usage, and maintenance over time.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Click-through rate (CTR)",
                "explanation": "CTR is a marketing or user engagement metric, not a cost metric.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/"
            }
        ]
    },
    {
        "id": 8,
        "question": "When deciding whether to \'build, buy, or extend,\' which factor most strongly favors \'extending\' a solution?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "The core functionality is available in an OOB platform but requires specific integration with proprietary systems.",
                "explanation": "Extending allows you to leverage existing platform stability while customizing the AI for your unique business logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "No existing solution on the market exists.",
                "explanation": "If no solution exists, you would likely need to \'build\' from scratch.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The company has an unlimited budget and time.",
                "explanation": "Budget doesn\'t dictate the technical strategy of extending vs. building, though it may influence the choice.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/"
            }
        ]
    },
    {
        "id": 9,
        "question": "What is the primary purpose of implementing a model router in an agentic architecture?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "To translate text between different languages.",
                "explanation": "Translation is a model capability, not a routing function.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "To intelligently direct requests to the most suitable model based on cost, speed, and complexity requirements.",
                "explanation": "Model routers optimize resources by sending simple tasks to smaller, cheaper models and complex tasks to larger ones.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "To block all unauthorized users from the system.",
                "explanation": "This is the job of identity management (IAM), not a model router.",
                "source": "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/"
            }
        ]
    },
    {
        "id": 10,
        "question": "Which process metric is most important for validating that an agent correctly uses its provided grounding data without hallucinating?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Groundedness",
                "explanation": "Groundedness (or faithfulness) measures how much of the agent\'s response is derived exclusively from the source context provided.",
                "source": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Token count",
                "explanation": "Token count measures usage volume, not factual accuracy or grounding.",
                "source": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "CPU usage",
                "explanation": "CPU usage is an infrastructure performance metric, not an AI quality metric.",
                "source": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/"
            }
        ]
    },
    {
        "id": 11,
        "question": "What is the standard best practice for managing environment-specific configurations (like API endpoints) during an AI solution\'s ALM process?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Hardcoding the production URL into the developer branch.",
                "explanation": "Hardcoding production values in dev branches is a security and deployment risk.",
                "source": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Using environment variables and connection references in the solution package.",
                "explanation": "Environment variables allow the same solution to be deployed across dev, test, and prod with unique settings for each stage.",
                "source": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Manually updating the code in production after it is deployed.",
                "explanation": "Manual updates in production bypass governance and can lead to inconsistent application behavior.",
                "source": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/"
            }
        ]
    },
    {
        "id": 12,
        "question": "In an end-to-end test scenario for Dynamics 365 AI solutions, what does \'ground truth\' validation involve?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Checking if the server is turned on.",
                "explanation": "Basic uptime is not ground truth validation.",
                "source": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Comparing the AI output to a curated set of human-verified expected results.",
                "explanation": "Ground truth is the \'gold standard\' data used to measure how accurately the AI is performing against known facts.",
                "source": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Asking the AI to judge itself.",
                "explanation": "While LLM-as-a-judge is a technique, \'ground truth\' specifically refers to the comparison against established external data.",
                "source": "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/"
            }
        ]
    },
    {
        "id": 13,
        "question": "Which extensibility mechanism allows a Copilot agent to interact with external data sources using a standardized interface without writing custom API calls for every system?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Standard and Custom Connectors in the Power Platform.",
                "explanation": "Connectors provide a consistent way for agents to communicate with hundreds of services like SharePoint, SQL, and third-party apps.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "HTML iFrames",
                "explanation": "iFrames display a webpage but do not allow the AI agent to query and process data from the external system.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "CSV exports",
                "explanation": "Exporting data is a manual process and does not represent a real-time extensibility interface for an agent.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/"
            }
        ]
    },
    {
        "id": 14,
        "question": "When designing agent behaviors in Copilot Studio, what determines how the agent handles ambiguous user intents?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The user\'s browser version.",
                "explanation": "Browser versions do not influence intent resolution logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Trigger phrases and conversational fallback logic.",
                "explanation": "Configuring how the agent responds when multiple topics match (or no topics match) ensures a smoother user experience.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The number of users in the system.",
                "explanation": "Concurrency affects performance, not the behavioral logic for ambiguity handling.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/"
            }
        ]
    },
    {
        "id": 15,
        "question": "What is the primary use case for \'Computer Use\' capabilities in an agentic AI workflow?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/",
        "answers": [
            {
                "id": 1,
                "correct": true,
                "answer": "Automating tasks in legacy applications or websites that lack modern APIs by interacting with the UI directly.",
                "explanation": "Computer Use allows agents to perform actions like a human would, such as clicking buttons or entering text in a browser.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/"
            },
            {
                "id": 2,
                "correct": false,
                "answer": "Generating code for a new operating system.",
                "explanation": "While LLMs can write code, \'Computer Use\' specifically refers to the runtime ability to interact with existing UIs.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Storing passwords in a local text file.",
                "explanation": "This is a security risk and not the intended purpose of agentic computer interaction.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/"
            }
        ]
    },
    {
        "id": 16,
        "question": "Which principle of Responsible AI ensures that an AI system treats all people fairly and avoids bias?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Transparency",
                "explanation": "Transparency ensures users understand that they are interacting with an AI and how it works.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Fairness",
                "explanation": "Fairness is the core principle dedicated to preventing bias and ensuring equitable treatment of all user groups.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Reliability and Safety",
                "explanation": "This principle focuses on the system performing as intended and avoiding harm, but \'Fairness\' is the specific answer for bias prevention.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/"
            }
        ]
    },
    {
        "id": 17,
        "question": "What is a primary mitigation strategy for preventing \'Prompt Injection\' attacks in a multi-agent system?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "Disabling the internet connection.",
                "explanation": "Disabling the internet is often not feasible for business AI and doesn\'t stop the injection itself if the user has access to the prompt.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "Implementing Content Safety filters and systemic prompt validation.",
                "explanation": "Runtime filters can detect malicious patterns in user inputs and block them before they reach the model.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "Making the agent responses shorter.",
                "explanation": "Response length does not prevent a malicious input from hijacking the model\'s logic.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/"
            }
        ]
    },
    {
        "id": 18,
        "question": "Who is responsible for strategic oversight and cross-functional alignment in a Microsoft AI Center of Excellence (CoE)?",
        "learningPath": "Module Assessment",
        "module": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/",
        "answers": [
            {
                "id": 1,
                "correct": false,
                "answer": "The junior software developer.",
                "explanation": "Junior developers implement code; they do not provide enterprise strategic oversight.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/"
            },
            {
                "id": 2,
                "correct": true,
                "answer": "The AI Council.",
                "explanation": "The AI Council (or steering committee) is the governance body that ensures AI initiatives align with organizational goals and compliance standards.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/"
            },
            {
                "id": 3,
                "correct": false,
                "answer": "The external cloud provider\'s support team.",
                "explanation": "Cloud support manages infrastructure issues, not your organization\'s internal AI strategy.",
                "source": "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-governance-risk-compliance/"
            }
        ]
    }
]