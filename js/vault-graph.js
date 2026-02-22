// Vault 4D Graph - hero visual from Obsidian vault
// 452 nodes, 1314 edges - filtered from real vault data
(function() {
'use strict';

const VAULT_GRAPH = {"c":["idea","ai","wellbeing","design","person","tool","book","place"],"n":[["Serendipity",0],["AI Agents",1],["Mindset",0],["Novelty seeking",0],["Personal OS",0],["Voice Claude",1],["The System",0],["Meditation",2],["Mindfulness",2],["Creativity",0],["Software 3.0",0],["Claude code",1],["Knowledge Management",0],["Quantified self",0],["Design Thinking",3],["Psychology",2],["Consciousness",2],["Flow",0],["Randomness",0],["@Sergey Kadomsky",4],["Words I love",0],["\u221e\u2192Diversify people I talk to",0],["PSYC 110. Introduction to Psychology",2],["Exploratory behaviour",0],["Flaneur",0],["AI Creativity",1],["My AI agents and automation",1],["MCP",5],["+Building effective agents",1],["AI Video tools",1],["MIT",0],["AI Translation",1],["AI Pair Programming",1],["Artificial Intelligence",0],["AI Business models",1],["Mixture of Agents",1],["Course - Claude Code Lab for Products",1],["Agents UX",1],["Bot UX",3],["Gemini Deep Research",0],["Agents Benchmarking",1],["AI Agents Payments",1],["AI agents for Instagram",1],["AI chat bots",1],["AI Courses",1],["AI Tools for marketing",1],["Large Language Models",1],["Teaching AI Agents to Non-Technical Users - Comprehensive Ideas List",1],["Replit agent",1],["RAG",0],["Cline",0],["OpenAI Operator",1],["AI Art coachings agent",1],["GPT Researcher",1],["+AI agents -- what they are, how they work, and use cases",1],["AI and creativity",1],["Agent Engineering",1],["AI software development agents",1],["Agents",1],["Documentation for AI agents",1],["Active inference",0],["AI automation",1],["Windsurf",0],["AI is more creative than humans",1],["AI Researcher Agents",1],["Ethical Adaptive Triggers Framework",0],["Openinterpreter",0],["Agentic Coding",1],["@Dr. Alia Crum",4],["Body Mass Index (BMI)",0],["Placebo",0],["Personality trait",0],["Learning",0],["+The modern world hijacks your attention. Here\u2019s how to take it back. Amishi Jha",0],["@Amishi Jha",4],["Ed Diener. Serious Research on Happiness",0],["personal knowledge management",0],["202511",0],["Obsidian",5],["Apple Health Data",0],["Avoid over-scaffolding",0],["Lifelogging",0],["Memex",0],["life management",0],["Citizen science",0],["Mac Mini",0],["Omi",0],["Bee",0],["Personal AI",0],["Plaud Note Pin",0],["Vibe coding",0],["Mirai",0],["Friend Wearable AI",0],["MoC - Knowledge Systems",0],["Apple Watch",0],["Local AI Inference",1],["Limitless Pendant",0],["Agent Skills",1],["The System - Telegram Agent",1],["Smart Turn",0],["Wake Word",0],["Self-concordance",0],["Claude Agent SDK",1],["Livekit",0],["People First Funds",0],["Voice agent frontend comparison",1],["system continuity",0],["Drift feedback",0],["Error detection",0],["Solopreneurship",0],["Failure recovery",0],["The System - Integration Architecture",0],["Mindfulness and HRV",2],["Mindfulness and Health",2],["@Jack Kornfield",4],["Meditation and the Brain",2],["@Michael Taft",4],["Meditation teachers",2],["Mindfulness and pain",2],["Mindful Productivity",2],["Mindfulness coaching",2],["Mindfulness Based Cognitive Therapy (MBCT)",2],["Mindfulness questionnaire",2],["@Shinzen Young",4],["Buddhism",0],["Books on Meditation recommended by Michael Taft",6],["Open monitoring",0],["Shamata",0],["@Tara Brach",4],["Mindfulness for Creativity",2],["@Thich Nhat Hanh",4],["Zen",0],["Curiosity",0],["@John Vervaeke",4],["@John Kabat-Zinn",4],["@Fedor Taranenko",4],["@Vincent Horn",4],["five goals or applications of mindfulness",2],["Compassion focused therapy",2],["Definition of Mindfulness",2],["@Dalai Lama",4],["@Victor Shiryaev",4],["Mindfulness and emotions",2],["Integration",0],["Compassion",0],["Acceptance and commitment therapy (ACT)",2],["Introspection",0],["Psychotherapy",2],["@Christopher Germer",4],["@David Lynch",4],["Living a creative lifestyle",0],["Creative Visualization",0],["Create connections",0],["@Andrej Karpathy",4],["Amp",0],["RIPER Workflow",0],["Claude Code Business",1],["llm-cli",1],["Autumn 2025 Overview",0],["Integral Life Overview - October 2025",0],["AGENCY Lab - Claude Project Instructions",1],["Codex",0],["Understanding Claude Code",1],["AI Coding Agents",1],["2025 Knowledge Ecosystem Map",0],["Serendipity Recommendation Principles",0],["Context Management",0],["Command Line",0],["Continual_Learning_in_Claude_Code",1],["Claude Code Tools",1],["ai-sdk-v5-crash-course",5],["Anthropic.ai",0],["Claude skills",1],["My Focus",0],["claude code post 01",1],["OpenRouter",0],["Anthropic Prompting Guidelines for Claude 4.5",1],["opencode",0],["Factory AI",0],["Lab Launch Checklist",0],["202502",0],["Claude code how to use",1],["writing on claude code",1],["AI Security",1],["Active Externalism",0],["@Niklas Luhmann",4],["Linking your thinking",0],["Execution",0],["Note-making vs note-taking",0],["Idea generation",0],["Task Management",0],["Trusted systems",0],["Community Knowledge Management",0],["Build a trusted system",0],["@Andy Matuschak",4],["@Nick Milo",4],["Daily note",0],["Getting Things Done",0],["Map of content",0],["Zettelkasten",0],["Signal vs noise",0],["Mind3 community",0],["\u221e\u2192 Your brain is for having ideas, not for storings them",0],["Maps making",0],["\u0412\u0435\u0447\u043d\u043e\u0437\u0435\u043b\u0435\u043d\u044b\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e \u043f\u0435\u0440\u0435\u043b\u0438\u043d\u043a\u043e\u0432\u0430\u043d\u044b",0],["Knowledge Graphs",0],["Evergreen notes",0],["Obsidian alternatives",5],["Knowledge",0],["\u0412\u0435\u0447\u043d\u043e\u0437\u0435\u043b\u0435\u043d\u044b\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u044b",0],["procrastination",0],["Heart Rate Variability",0],["MoC - Health",0],["Local AI",0],["Doing science on your life",0],["Self-monitoring",0],["Self-regulation",0],["Life Mapping Tools",5],["Mood monitoring",0],["@Kevin Kelly",4],["Input Sources for AI System",1],["Proactive Health Management",0],["\u221e\u2192Disease is shrinkage of capacity for adaptive variation",0],["Journaling",0],["Data lake",0],["AlterEgo",0],["\u221e\u2192Wide dynamic range is healthy",0],["Wellbeing",0],["Ultrahuman",0],["Oura Ring",0],["Quantified relationships",0],["rumination",0],["+Why we self sabotage the recovery process. Learn how to refuel your brain and body the natural way.",0],["Personal Health Intelligence",0],["Reflective practice",0],["Quantified self course",0],["Behavioral activation monitoring",0],["Sleep tracking",0],["Collect \u2192 reflect",0],["Deciding What To Observe",0],["Human-centered design",3],["Problem solving",0],["Shared problem space",0],["Design your life",3],["Innovation",0],["IDEO",0],["Intelligence",0],["Detection of consciousness",2],["AI Consciousness",2],["Emergentism",0],["@Sam Harris",4],["Spectrum of consciousness",2],["+Your brain hallucinates your conscious reality",0],["Integrated Information Theory",0],["@Francis Crick",4],["Integrative information theory of Consciousness",2],["@Giulio Tononi",4],["Pure consciousness event",2],["Unconscious Bias",0],["Plant consciousness",2],["Focus",0],["Example Motivators",0],["Window of tolerance",0],["@Mihaly Csikszentmihalyi",4],["Deep work",0],["Feel flow",0],["Cognitive performance",0],["Mental states",0],["Hyperfocus",0],["Dynamic Difficulty Adjustment",0],["Feedback is crucial for learning",0],["The Scale of subjective states",0],["Entropy",0],["Brain",0],["Synchronicity",0],["Touch",0],["Zeigarnik effect",0],["Diversity",0],["Acceptance",0],["Autonomy",0],["Intention",0],["Commitment",0],["Writing",6],["Xenohormesis",0],["Deliberation",0],["@Alan W. Watts",4],["Agency (book)",6],["Polymaths",0],["Vulnerability",0],["Feedback loop",0],["Sex",0],["Awe",0],["Generalist",0],["Love",0],["Singularity",0],["@Gleb Kalinin",4],["Unpredictibility",0],["Emergence",0],["Synergy",0],["Experiment",0],["T-Shaped Person",0],["Not-knowing",0],["Human in focus",0],["Redundancy",0],["Awareness",0],["Long-term",0],["\u221e\u2192Conversation is primary medium for developing ideas",0],["Relocation to Berlin",7],["How I use Obsidian for networking",5],["@Sigmund Freud",4],["Operant Conditioning",0],["@B. F. Skinner",4],["Unconscious",0],["@Paul Bloom",4],["@Ivan Pavlov",4],["Little Albert experiment",0],["Parental investment",0],["Koinophilia",0],["Yale Univesity",0],["average faces",0],["Extinction (behaviour)",0],["Habituation",0],["Organism-environment system",0],["Multipotential",0],["Community",0],["Consulting Agreement",0],["Obsidian as a self-discovery tool",5],["@Anton Simanenko",4],["Building Skills for Claude",1],["n8n",0],["Agentic Knowledge Management",1],["2025 systems",0],["Attention",0],["Salience cannot be computed",0],["Prompt engineering",0],["Salience",0],["Claude",1],["LSP",0],["@Tim Berners-Lee",4],["@Richard Feynman",4],["Antidisciplinarity",0],["Interdisciplinary Research",0],["@Salman Khan",4],["Collective Intelligence",0],["@Peter Senge",4],["Language Models",1],["Reasoning",0],["Notion",0],["ChatGPT",1],["Research on AI",0],["Robots",0],["Dangers of AI",0],["Machine learning",1],["Alignment problem",0],["AI Explained",1],["Oppurtunities in AI",0],["Business Models",1],["Business Model Canvas",1],["Personal Assistant",0],["Telegram",0],["Chat Bots",0],["General agent",1],["MoC - AI & Agents",1],["Google AI",0],["Google",0],["Obsidian + AI principles and approaches",1],["Obsidain AI",0],["Deliberate practice",0],["AI Therapy Analysis",2],["Think&Link 3",0],["OSWorld",0],["@Alexander Povaliaev",4],["AI Psychotherapy",2],["LangChain. Chat with Your Data",0],["OpenAI",0],["@Harrison Chase",4],["Skin-Covered Bastards (chat)",0],["Generative AI for Everyone",1],["PaLM",0],["Llama-3",0],["Groq",0],["@Sam Altman",4],["GPT-4",1],["Alpaca",0],["+RouteLLM achieves 90- GPT4o Quality AND 80- CHEAPER - YouTube",1],["GPT-3.5",1],["VibeBerlin Telegram bot",7],["AI for research papers",1],["Prompt Caching",0],["GraphRAG",0],["embeddings",0],["Contextual Retrieval",0],["Cognita",0],["Citations in Anthropic API",5],["My AI Project Ideas",1],["Tavily",0],["OpenAI Deep Research",1],["Agentic Behavior and Design Notes",1],["Subagents",1],["Devin",0],["Automation",0],["Zed AI",0],["Cursorisation",0],["Source of info on AI",0],["SWE-Agent",1],["GitHub Copilot",0],["Aider",0],["GSD Framework",0],["Lovable.dev",0],["My Obsidian plugins",5],["Pythogora",0],["OpenDevin",0],["Cursor.ai",0],["Claude.md",1],["Documentation",0],["Behaviour",0],["Reinforcement learning",0],["Decision-making",0],["@Karl Friston",4],["Predictive processing",0],["Waste in Lean Manufacturing",0],["Eliminate. Simplify. Automate. Delegate.",0],["Scade",0],["Adept AI",0],["Text-To-Speech",0],["Speech to text",0],["Hallucinations as intelligence feature",0],["+Claude 3.5 Sonnet for agentic coding - YouTube",1],["Emergent abilities in language models",1],["Error-correction",0],["Collective Decision making",0],["@Andrew Huberman",4],["Stanford University",0],["C-Reactive Protein",0],["Extraversion",0],["Openness",0],["HEXACO",0],["Neuroticism",0],["Alexithymia",0],["The Big Five Personality model",1],["Conscientiousness",0],["Agreeableness",0],["Testing effect",0],["Studying in Obsidian",5],["Meta-skills",0],["@Igor Ivanov",4],["Dopamine",0],["Learning curve",0],["Spaced Repetition",0],["Generation effect",0],["Implicit learning",0],["Metacognition",0]],"e":[[0,18],[0,19],[0,20],[0,21],[0,22],[0,23],[0,24],[1,25],[1,26],[1,27],[1,28],[1,29],[1,30],[1,9],[1,31],[1,32],[1,33],[1,34],[1,35],[1,36],[1,37],[1,38],[1,39],[1,40],[1,41],[1,42],[1,43],[1,44],[1,45],[1,46],[1,47],[1,48],[1,49],[1,50],[1,51],[1,52],[1,53],[1,11],[1,54],[1,55],[1,56],[1,57],[1,58],[1,59],[1,60],[1,61],[1,62],[1,63],[1,64],[1,65],[1,66],[1,67],[2,68],[2,69],[2,70],[3,71],[3,72],[3,73],[3,74],[3,23],[3,75],[4,76],[4,77],[4,10],[4,78],[4,79],[4,80],[4,81],[4,82],[4,83],[4,6],[4,84],[4,85],[4,13],[4,86],[4,87],[4,88],[4,89],[4,90],[4,11],[4,91],[4,92],[4,93],[4,94],[4,5],[4,95],[4,96],[4,97],[5,98],[5,10],[5,99],[5,100],[5,101],[5,6],[5,102],[5,103],[5,85],[5,104],[5,90],[5,97],[5,105],[6,98],[6,77],[6,10],[6,106],[6,78],[6,79],[6,85],[6,107],[6,108],[6,109],[6,110],[6,11],[6,111],[7,112],[7,113],[7,114],[7,115],[7,116],[7,8],[7,117],[7,118],[7,119],[7,120],[7,121],[7,122],[7,123],[7,124],[7,125],[7,126],[7,127],[7,128],[7,129],[7,130],[7,131],[8,132],[8,133],[8,134],[8,112],[8,113],[8,114],[8,135],[8,115],[8,116],[8,136],[8,137],[8,138],[8,117],[8,120],[8,119],[8,139],[8,121],[8,140],[8,141],[8,142],[8,122],[8,123],[8,124],[8,143],[8,125],[8,126],[8,144],[8,128],[8,129],[8,145],[8,146],[8,147],[8,148],[9,55],[9,129],[9,149],[9,150],[9,151],[9,152],[9,9],[10,153],[10,102],[10,90],[11,154],[11,155],[11,156],[11,157],[11,158],[11,159],[11,160],[11,161],[11,36],[11,162],[11,163],[11,164],[11,165],[11,166],[11,167],[11,168],[11,169],[11,170],[11,171],[11,172],[11,90],[11,173],[11,174],[11,58],[11,175],[11,176],[11,177],[11,178],[11,179],[11,180],[11,181],[11,182],[11,67],[11,183],[12,184],[12,185],[12,78],[12,186],[12,187],[12,188],[12,189],[12,190],[12,191],[12,192],[12,193],[12,194],[12,195],[12,196],[12,197],[12,198],[12,199],[12,200],[12,201],[12,202],[12,203],[12,204],[12,205],[12,206],[12,207],[12,208],[12,209],[12,210],[13,211],[13,212],[13,213],[13,214],[13,79],[13,215],[13,216],[13,217],[13,218],[13,81],[13,83],[13,219],[13,23],[13,13],[13,220],[13,221],[13,222],[13,223],[13,224],[13,225],[13,226],[13,227],[13,228],[13,229],[13,230],[13,231],[13,232],[13,233],[13,234],[13,235],[13,236],[13,237],[13,96],[13,238],[13,239],[14,240],[14,241],[14,242],[14,243],[14,244],[14,245],[16,246],[16,247],[16,248],[16,249],[16,250],[16,251],[16,252],[16,16],[16,253],[16,254],[16,255],[16,256],[16,257],[16,258],[16,259],[17,260],[17,261],[17,262],[17,263],[17,264],[17,265],[17,266],[17,267],[17,268],[17,269],[17,270],[17,271],[18,272],[20,132],[20,273],[20,274],[20,184],[20,275],[20,276],[20,277],[20,278],[20,279],[20,280],[20,281],[8,20],[20,282],[20,283],[20,284],[20,285],[20,286],[20,287],[20,288],[20,289],[20,290],[20,291],[20,292],[20,293],[20,294],[20,295],[20,296],[20,297],[20,298],[20,299],[20,300],[20,301],[20,302],[20,303],[20,304],[20,305],[21,306],[21,307],[21,308],[22,309],[22,310],[22,311],[22,312],[22,313],[22,314],[22,290],[22,315],[22,316],[22,317],[22,318],[22,319],[22,320],[22,72],[22,321],[23,322],[3,24],[24,326],[25,327],[26,27],[26,328],[26,329],[26,330],[26,331],[27,49],[27,50],[27,336],[27,328],[27,171],[27,337],[27,28],[27,78],[28,328],[30,338],[30,339],[30,340],[30,244],[30,341],[30,342],[30,208],[30,343],[30,344],[31,33],[31,46],[33,55],[33,345],[33,346],[33,61],[33,347],[33,348],[33,349],[33,350],[33,351],[33,352],[33,353],[33,354],[33,355],[34,356],[34,357],[36,166],[36,160],[37,47],[37,358],[37,56],[37,38],[37,65],[38,358],[38,359],[38,65],[38,360],[39,363],[39,364],[40,370],[43,371],[33,43],[43,345],[43,348],[43,372],[43,352],[44,373],[33,44],[44,374],[44,375],[44,376],[44,377],[46,378],[46,379],[46,374],[46,349],[46,380],[46,381],[33,46],[46,382],[46,383],[46,336],[46,171],[46,384],[46,385],[44,47],[47,67],[48,386],[48,57],[49,387],[49,388],[49,380],[49,389],[49,390],[49,391],[49,392],[49,393],[11,49],[46,49],[50,67],[52,394],[53,395],[53,396],[39,53],[55,63],[56,57],[56,397],[56,97],[26,57],[57,398],[57,399],[57,400],[32,57],[57,401],[57,402],[57,403],[50,57],[57,404],[57,405],[57,406],[11,57],[57,407],[57,408],[57,409],[57,410],[57,62],[57,411],[57,66],[57,67],[57,412],[58,413],[59,414],[59,67],[60,415],[60,416],[60,417],[60,418],[60,419],[61,420],[61,421],[61,422],[48,62],[62,90],[62,67],[62,412],[9,63],[64,396],[51,64],[39,64],[53,64],[65,358],[66,167],[66,423],[66,424],[66,425],[46,66],[67,426],[67,399],[67,246],[67,427],[67,270],[67,284],[32,67],[67,346],[67,241],[67,428],[67,330],[67,429],[67,367],[67,404],[67,90],[67,406],[67,411],[67,430],[67,412],[68,431],[68,70],[68,432],[69,433],[69,211],[71,434],[71,435],[71,436],[71,437],[71,438],[71,439],[71,440],[71,441],[72,442],[72,443],[72,444],[72,445],[72,446],[72,188],[72,447],[72,448],[72,449],[17,72],[72,450],[72,451],[73,332],[73,74],[8,73],[74,332],[8,74],[75,140],[75,293],[76,443],[12,76],[76,158],[76,78],[9,76],[76,284],[76,186],[76,188],[76,241],[76,191],[76,192],[76,447],[76,193],[76,330],[76,197],[76,448],[76,198],[76,367],[67,76],[76,199],[76,200],[76,449],[76,336],[76,204],[57,76],[72,76],[76,206],[76,208],[76,209],[36,77],[5,77],[78,282],[78,186],[78,188],[78,199],[79,211],[79,229],[6,80],[10,80],[11,80],[82,184],[82,93],[82,338],[82,199],[78,82],[76,83],[83,332],[79,83],[83,216],[83,101],[6,83],[83,197],[83,173],[5,83],[33,84],[13,84],[84,220],[77,85],[81,86],[86,89],[5,86],[13,86],[86,96],[86,87],[81,87],[87,89],[13,87],[87,96],[81,89],[5,89],[13,89],[89,96],[90,153],[90,386],[90,161],[90,412],[78,91],[6,91],[91,95],[5,91],[85,91],[10,91],[79,91],[11,91],[87,92],[89,92],[92,96],[86,92],[76,93],[93,338],[78,93],[93,217],[93,260],[93,102],[93,191],[93,192],[93,366],[93,306],[93,198],[93,166],[93,200],[93,202],[93,173],[1,93],[93,205],[93,335],[93,206],[79,94],[10,95],[6,95],[85,95],[13,95],[11,95],[5,95],[97,362],[11,97],[10,98],[78,98],[79,98],[97,98],[98,102],[13,98],[4,98],[11,98],[98,99],[99,103],[99,100],[99,425],[101,332],[36,101],[101,109],[98,103],[104,109],[106,108],[106,107],[106,110],[4,107],[107,335],[107,108],[108,110],[5,109],[109,295],[107,110],[98,111],[4,111],[5,111],[10,111],[111,362],[106,111],[11,111],[114,128],[115,115],[115,131],[115,144],[116,123],[115,116],[116,125],[117,128],[114,117],[117,141],[117,136],[117,250],[117,148],[118,141],[118,123],[120,139],[113,121],[124,127],[124,131],[114,125],[129,151],[130,144],[130,131],[123,131],[126,131],[8,131],[119,131],[132,132],[133,141],[124,133],[123,137],[138,144],[132,139],[133,139],[139,374],[139,216],[139,250],[7,139],[139,148],[124,140],[123,141],[7,141],[112,142],[16,143],[143,143],[135,145],[145,278],[141,145],[145,147],[153,374],[153,348],[154,177],[154,178],[154,163],[67,154],[156,169],[154,156],[36,156],[27,156],[156,178],[156,171],[156,163],[156,161],[67,156],[157,175],[78,158],[158,160],[158,192],[158,330],[158,430],[158,367],[67,158],[67,161],[161,330],[162,182],[162,181],[57,163],[50,163],[1,163],[163,399],[62,163],[163,177],[163,178],[163,337],[163,406],[161,163],[67,163],[163,412],[12,164],[158,164],[78,164],[164,270],[164,284],[164,186],[164,346],[164,241],[164,417],[164,389],[164,192],[164,330],[164,193],[49,164],[164,198],[164,429],[164,367],[67,164],[164,199],[164,200],[164,449],[164,406],[164,173],[1,164],[164,205],[57,164],[72,164],[164,206],[164,208],[164,430],[164,412],[165,374],[165,348],[165,171],[12,166],[167,177],[27,168],[168,172],[67,168],[169,361],[162,169],[169,362],[167,169],[169,337],[58,169],[5,169],[169,181],[169,182],[36,170],[171,374],[171,336],[172,336],[171,172],[173,332],[98,173],[173,212],[36,173],[4,173],[5,173],[169,175],[46,175],[1,177],[50,177],[177,178],[177,406],[161,177],[177,412],[1,178],[67,178],[36,179],[160,179],[5,180],[171,181],[174,182],[56,183],[183,362],[78,184],[184,193],[184,197],[4,184],[184,199],[184,335],[184,322],[185,199],[186,198],[186,188],[186,200],[186,203],[186,194],[186,195],[187,193],[188,449],[188,204],[189,245],[14,189],[190,197],[119,190],[191,196],[191,197],[184,191],[186,191],[187,191],[190,191],[191,202],[191,206],[191,193],[78,192],[192,192],[192,324],[192,201],[192,205],[193,207],[193,421],[78,193],[194,206],[78,194],[194,194],[4,196],[197,276],[197,202],[193,197],[198,200],[198,206],[198,203],[78,198],[195,198],[199,206],[200,332],[188,200],[200,206],[200,203],[201,371],[76,202],[202,276],[202,206],[49,205],[205,389],[185,206],[206,209],[204,206],[207,371],[186,207],[78,207],[184,208],[208,332],[208,246],[78,208],[33,208],[208,341],[1,208],[72,208],[211,211],[94,211],[211,222],[213,224],[214,223],[23,214],[215,218],[215,234],[215,267],[215,236],[215,223],[216,231],[217,308],[217,218],[4,217],[173,217],[217,223],[8,218],[220,221],[222,226],[222,382],[223,234],[223,223],[223,282],[225,424],[226,332],[211,226],[226,340],[226,231],[228,233],[211,228],[226,228],[228,229],[229,237],[229,233],[211,229],[226,229],[221,229],[222,229],[231,231],[81,232],[220,233],[221,233],[234,367],[234,234],[232,235],[81,236],[235,238],[239,243],[241,246],[9,241],[241,417],[241,242],[17,241],[242,242],[242,340],[242,343],[242,341],[30,242],[222,242],[243,417],[17,243],[243,243],[3,244],[246,426],[246,246],[246,248],[9,246],[246,419],[33,246],[14,246],[17,246],[246,451],[246,343],[246,259],[247,255],[247,257],[249,297],[252,255],[252,418],[253,256],[247,253],[255,256],[133,257],[258,313],[260,332],[173,260],[127,260],[216,262],[266,273],[266,332],[241,266],[266,267],[267,271],[268,332],[195,269],[270,306],[33,272],[276,332],[8,278],[75,279],[280,281],[145,281],[284,346],[284,417],[284,367],[223,284],[284,430],[285,322],[7,285],[287,292],[289,306],[290,313],[292,300],[293,446],[290,293],[286,295],[295,302],[296,351],[297,428],[194,306],[120,307],[310,311],[313,318],[72,314],[311,314],[277,317],[317,319],[320,320],[315,320],[72,321],[8,321],[132,323],[226,323],[19,323],[72,323],[242,323],[300,323],[3,323],[323,340],[244,323],[323,341],[295,324],[78,326],[328,398],[59,328],[328,336],[171,328],[61,329],[6,329],[102,329],[329,331],[49,330],[78,330],[330,412],[133,332],[8,332],[7,332],[33,334],[46,334],[332,335],[335,419],[173,336],[67,337],[4,338],[72,339],[340,341],[222,340],[244,341],[226,341],[143,341],[1,341],[341,343],[241,343],[343,417],[343,430],[345,385],[207,347],[78,347],[348,382],[348,374],[348,385],[1,350],[46,350],[351,353],[345,352],[34,355],[88,358],[348,359],[43,360],[153,361],[4,361],[1,361],[10,361],[5,361],[361,362],[11,361],[97,361],[362,374],[10,362],[44,362],[351,362],[362,366],[1,362],[175,362],[56,362],[5,362],[100,362],[4,362],[54,362],[57,362],[28,362],[353,362],[362,372],[103,362],[49,362],[362,368],[363,364],[348,366],[336,366],[78,366],[270,367],[289,367],[367,447],[367,448],[367,429],[17,367],[72,367],[348,368],[336,368],[369,371],[119,369],[1,370],[345,372],[360,372],[373,375],[373,390],[46,373],[374,382],[374,381],[374,385],[327,376],[33,376],[382,428],[382,385],[382,383],[374,383],[383,432],[383,385],[33,385],[46,387],[171,391],[28,397],[1,397],[67,397],[394,398],[41,398],[398,407],[399,404],[399,411],[1,399],[400,421],[401,406],[401,405],[401,412],[402,408],[402,412],[327,403],[354,403],[404,411],[17,405],[405,405],[405,406],[399,406],[406,411],[406,412],[59,407],[48,410],[399,410],[336,411],[1,411],[408,412],[207,412],[78,412],[176,413],[102,413],[172,413],[11,413],[72,416],[58,419],[420,421],[399,423],[370,423],[103,424],[424,425],[5,425],[248,426],[215,426],[419,426],[426,451],[33,426],[252,426],[7,426],[426,429],[426,450],[247,426],[9,426],[416,426],[108,426],[367,426],[16,426],[335,426],[332,426],[241,426],[46,426],[255,426],[72,426],[259,426],[46,428],[246,429],[270,429],[419,429],[429,446],[416,429],[417,429],[289,429],[46,429],[16,429],[429,450],[429,451],[60,429],[72,429],[303,429],[78,430],[417,430],[192,430],[429,430],[201,430],[205,430],[435,439],[434,436],[436,440],[436,441],[436,439],[8,437],[437,439],[434,439],[439,440],[439,441],[442,442],[443,448],[78,443],[310,446],[442,449],[16,451],[8,451],[282,451]]};

// Orange-accent color palette matching site theme
const CAT_COLORS = {
  idea:      [1.00, 0.55, 0.25],  // warm orange
  ai:        [1.00, 0.42, 0.21],  // accent orange #ff6b35
  wellbeing: [0.85, 0.35, 0.50],  // muted rose
  design:    [1.00, 0.70, 0.35],  // amber
  person:    [0.70, 0.40, 0.25],  // burnt sienna
  tool:      [0.90, 0.60, 0.30],  // copper
  book:      [0.80, 0.50, 0.20],  // bronze
  place:     [0.60, 0.45, 0.30],  // earth tone
};

const container = document.getElementById('vault-graph-container');
if (!container) return;

const canvas = document.createElement('canvas');
canvas.id = 'vault-graph-canvas';
canvas.style.cssText = 'width:100%;height:100%;display:block;cursor:grab;';
container.appendChild(canvas);

const labelLayer = document.createElement('div');
labelLayer.id = 'vault-label-layer';
labelLayer.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;';
container.appendChild(labelLayer);

// Load Three.js dynamically
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
script.onload = initGraph;
document.head.appendChild(script);

function initGraph() {
  const THREE = window.THREE;
  const nodes = VAULT_GRAPH.n;
  const edges = VAULT_GRAPH.e;
  const cats = VAULT_GRAPH.c;
  const nodeCount = nodes.length;
  const edgeCount = edges.length;

  // 4D math
  function identity4() { return Float32Array.from([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]); }
  function mul4(a,b) {
    const r = new Float32Array(16);
    for (let i=0;i<4;i++) for(let j=0;j<4;j++){let s=0;for(let k=0;k<4;k++)s+=a[i*4+k]*b[k*4+j];r[i*4+j]=s;}
    return r;
  }
  function rot4(angle,axA,axB) {
    const m=identity4(),c=Math.cos(angle),s=Math.sin(angle);
    m[axA*4+axA]=c;m[axB*4+axB]=c;m[axA*4+axB]=-s;m[axB*4+axA]=s;
    return m;
  }
  function apply4(v,m) {
    return [m[0]*v[0]+m[1]*v[1]+m[2]*v[2]+m[3]*v[3],m[4]*v[0]+m[5]*v[1]+m[6]*v[2]+m[7]*v[3],
            m[8]*v[0]+m[9]*v[1]+m[10]*v[2]+m[11]*v[3],m[12]*v[0]+m[13]*v[1]+m[14]*v[2]+m[15]*v[3]];
  }
  function compose(ang) {
    let r=identity4();
    const pl=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
    const k=['xy','xz','xw','yz','yw','zw'];
    for(let i=0;i<6;i++){const a=ang[k[i]]||0;if(a)r=mul4(rot4(a,pl[i][0],pl[i][1]),r);}
    return r;
  }
  function proj43(v,wCam,scale) {
    const d=Math.max(0.05,wCam-v[3]),f=scale/d;
    return [v[0]*f,v[1]*f,v[2]*f];
  }
  function clamp(v,lo,hi){return Math.min(hi,Math.max(lo,v));}

  // Compute node degrees
  const degrees = new Uint16Array(nodeCount);
  edges.forEach(([a,b])=>{degrees[a]++;degrees[b]++;});

  // Position on 4D torus
  const MAJOR_R=2.8, MINOR_R=1.1;
  const verts4d = new Array(nodeCount);
  const byCat = {};
  nodes.forEach((n,i)=>{(byCat[n[1]]=byCat[n[1]]||[]).push(i);});

  for(let i=0;i<nodeCount;i++){
    const catIdx=nodes[i][1];
    const catIds=byCat[catIdx]||[];
    const within=catIds.indexOf(i);
    const theta=(catIdx/cats.length)*Math.PI*2+(within*0.08);
    const phi=(within/catIds.length)*Math.PI*2;
    const j=0.25;
    verts4d[i]=[
      MAJOR_R*Math.cos(theta)+MINOR_R*Math.cos(phi)*Math.cos(theta)+(Math.random()-0.5)*j,
      MAJOR_R*Math.sin(theta)+MINOR_R*Math.cos(phi)*Math.sin(theta)+(Math.random()-0.5)*j,
      MINOR_R*Math.sin(phi)+(Math.random()-0.5)*j,
      MINOR_R*Math.cos(phi)*0.7+(Math.random()-0.5)*j
    ];
  }

  // Three.js setup
  const rect = container.getBoundingClientRect();
  const W = rect.width||600, H = rect.height||500;

  const renderer = new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(W,H);
  renderer.setClearColor(0x000000,0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45,W/H,0.01,100);
  camera.position.set(0,0,7);

  // Shaders
  const VERT=`
    attribute float size;attribute float intensity;attribute vec3 hyperColor;
    varying vec3 vColor;varying float vInt;
    void main(){vColor=hyperColor;vInt=intensity;
    vec4 mv=modelViewMatrix*vec4(position,1.0);
    gl_PointSize=clamp(size*(250.0/max(0.001,-mv.z)),1.0,120.0);
    gl_Position=projectionMatrix*mv;}`;
  const FRAG=`
    varying vec3 vColor;varying float vInt;uniform float opacity;uniform float glow;
    void main(){vec2 c=gl_PointCoord-vec2(0.5);float d=length(c);
    if(d>0.55)discard;float h=smoothstep(0.55,0.28,d);float core=smoothstep(0.32,0.0,d);
    float a=clamp(core+h*glow,0.0,1.0)*opacity*clamp(vInt,0.05,1.35);
    gl_FragColor=vec4(mix(vColor*0.75,vColor,core),a);}`;

  // Point buffers
  const posArr=new Float32Array(nodeCount*3);
  const colorArr=new Float32Array(nodeCount*3);
  const sizeArr=new Float32Array(nodeCount);
  const intArr=new Float32Array(nodeCount);
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(posArr,3));
  geo.setAttribute('hyperColor',new THREE.BufferAttribute(colorArr,3));
  geo.setAttribute('size',new THREE.BufferAttribute(sizeArr,1));
  geo.setAttribute('intensity',new THREE.BufferAttribute(intArr,1));
  const mat=new THREE.ShaderMaterial({
    uniforms:{opacity:{value:0.92},glow:{value:0.45}},
    transparent:true,depthWrite:false,vertexColors:true,
    vertexShader:VERT,fragmentShader:FRAG,
    blending:THREE.AdditiveBlending
  });
  const pts=new THREE.Points(geo,mat);
  pts.frustumCulled=false;
  scene.add(pts);

  // Edge buffers
  const ePosArr=new Float32Array(edgeCount*6);
  const eColArr=new Float32Array(edgeCount*6);
  const eGeo=new THREE.BufferGeometry();
  eGeo.setAttribute('position',new THREE.BufferAttribute(ePosArr,3));
  eGeo.setAttribute('color',new THREE.BufferAttribute(eColArr,3));
  const eMat=new THREE.LineBasicMaterial({transparent:true,opacity:0.12,vertexColors:true,linewidth:1});
  const eLines=new THREE.LineSegments(eGeo,eMat);
  eLines.frustumCulled=false;
  scene.add(eLines);

  // Rotation state
  const rot={xy:0,xz:0,xw:0,yz:0,yw:0,zw:0};
  let autoTime=0;
  const speed={xw:0.05,yw:0.035,zw:0.02,xy:0.006,yz:0.01};

  // Drag controls
  let dragging=false,lastX=0,lastY=0,cameraZ=7;
  canvas.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId);canvas.style.cursor='grabbing';});
  window.addEventListener('pointermove',e=>{
    if(!dragging)return;
    const dx=e.clientX-lastX,dy=e.clientY-lastY;
    lastX=e.clientX;lastY=e.clientY;
    if(e.shiftKey){rot.xw+=dx*0.003;rot.yw+=dy*0.003;}
    else{rot.xy+=dx*0.002;rot.xz+=dy*0.002;}
  });
  window.addEventListener('pointerup',()=>{dragging=false;canvas.style.cursor='grab';});
  canvas.addEventListener('wheel',e=>{e.preventDefault();cameraZ=clamp(cameraZ-Math.sign(e.deltaY)*0.4,3,14);},{passive:false});

  // Labels
  const MAX_LABELS=25;
  const labelEls=[];
  for(let i=0;i<MAX_LABELS;i++){
    const el=document.createElement('div');
    el.style.cssText='position:absolute;font-family:var(--font-mono,"Geist Mono",monospace);white-space:nowrap;pointer-events:none;text-shadow:0 0 8px rgba(26,26,31,0.95),0 0 16px rgba(26,26,31,0.7);will-change:transform,opacity;';
    el.style.display='none';
    labelLayer.appendChild(el);
    labelEls.push(el);
  }

  const tmpV=new THREE.Vector3();
  function updateLabels(projected,rotated,wMin,wRange,dMin,dRange){
    const w=canvas.clientWidth,h=canvas.clientHeight;
    const hw=w/2,hh=h/2;
    const cands=[];
    for(let i=0;i<nodeCount;i++){
      const p=projected[i];
      tmpV.set(p[0],p[1],p[2]).project(camera);
      const sx=(tmpV.x*hw)+hw,sy=(-tmpV.y*hh)+hh;
      if(tmpV.z>1||tmpV.z<0||sx<-80||sx>w+80||sy<-40||sy>h+40)continue;
      const depth=(p[2]-dMin)/dRange;
      const wt=degrees[i]*1.5+(1-depth)*3;
      const fs=clamp(7+degrees[i]*0.6,7,14);
      const op=clamp(0.25+(1-depth)*0.75,0.1,0.95);
      cands.push({i,sx,sy,wt,fs,op});
    }
    cands.sort((a,b)=>b.wt-a.wt);
    const vis=[];
    for(const c of cands){
      let ok=true;
      for(const v of vis){const dx=c.sx-v.sx,dy=c.sy-v.sy;if(dx*dx+dy*dy<(c.fs+v.fs)*7){ok=false;break;}}
      if(ok){vis.push(c);if(vis.length>=MAX_LABELS)break;}
    }
    for(let j=0;j<MAX_LABELS;j++){
      const el=labelEls[j];
      if(j<vis.length){
        const v=vis[j];
        const node=nodes[v.i];
        const cc=CAT_COLORS[cats[node[1]]]||[1,0.42,0.21];
        el.textContent=node[0];
        el.style.display='';
        el.style.transform=`translate(${v.sx}px,${v.sy}px) translate(-50%,-120%)`;
        el.style.fontSize=v.fs+'px';
        el.style.opacity=v.op;
        el.style.color=`rgba(${Math.round(cc[0]*255)},${Math.round(cc[1]*255)},${Math.round(cc[2]*255)},${clamp(v.op+0.2,0.3,1)})`;
      }else{el.style.display='none';}
    }
  }

  // Edge gradient in orange tones
  const lineStops=[[0,[0.70,0.30,0.15]],[0.5,[1.0,0.42,0.21]],[1,[1.0,0.65,0.35]]];
  function gradC(t){
    t=clamp(t,0,1);
    for(let i=0;i<lineStops.length-1;i++){
      if(t>=lineStops[i][0]&&t<=lineStops[i+1][0]){
        const l=(t-lineStops[i][0])/(lineStops[i+1][0]-lineStops[i][0]);
        return lineStops[i][1].map((c,j)=>c+(lineStops[i+1][1][j]-c)*l);
      }
    }
    return lineStops[0][1];
  }

  let lastLabel=0;
  function animate(now){
    requestAnimationFrame(animate);
    if(!dragging){
      autoTime+=0.008;
      rot.xw+=speed.xw*0.008;rot.yw+=speed.yw*0.008;rot.zw+=speed.zw*0.008;
      rot.xy+=speed.xy*0.008;rot.yz+=speed.yz*0.008;
    }
    camera.position.z+=(cameraZ-camera.position.z)*0.08;
    if(!dragging){camera.position.x=Math.sin(autoTime*0.08)*0.4;camera.position.y=Math.cos(autoTime*0.06)*0.25;}
    camera.lookAt(0,0,0);

    const rm=compose(rot);
    let wMin=1e9,wMax=-1e9;
    const rotated=[];
    for(let i=0;i<nodeCount;i++){const r=apply4(verts4d[i],rm);rotated[i]=r;if(r[3]<wMin)wMin=r[3];if(r[3]>wMax)wMax=r[3];}
    const wRange=wMax-wMin||1;

    const projected=[];
    let dMin=1e9,dMax=-1e9;
    for(let i=0;i<nodeCount;i++){
      const p=proj43(rotated[i],3.2,1.2);
      projected[i]=p;
      posArr[i*3]=p[0];posArr[i*3+1]=p[1];posArr[i*3+2]=p[2];
      if(p[2]<dMin)dMin=p[2];if(p[2]>dMax)dMax=p[2];
    }
    const dRange=dMax-dMin||1;

    for(let i=0;i<nodeCount;i++){
      const nw=(rotated[i][3]-wMin)/wRange;
      const cc=CAT_COLORS[cats[nodes[i][1]]]||[1,0.42,0.21];
      colorArr[i*3]=cc[0];colorArr[i*3+1]=cc[1];colorArr[i*3+2]=cc[2];
      sizeArr[i]=0.08+degrees[i]*0.025;
      intArr[i]=0.35+nw*0.9;
    }

    for(let e=0;e<edgeCount;e++){
      const [ai,bi]=edges[e];
      const a=projected[ai],b=projected[bi];
      const base=e*6;
      ePosArr[base]=a[0];ePosArr[base+1]=a[1];ePosArr[base+2]=a[2];
      ePosArr[base+3]=b[0];ePosArr[base+4]=b[1];ePosArr[base+5]=b[2];
      const nwa=(rotated[ai][3]-wMin)/wRange,nwb=(rotated[bi][3]-wMin)/wRange;
      const ca=gradC(nwa),cb=gradC(nwb);
      eColArr[base]=ca[0];eColArr[base+1]=ca[1];eColArr[base+2]=ca[2];
      eColArr[base+3]=cb[0];eColArr[base+4]=cb[1];eColArr[base+5]=cb[2];
    }

    geo.attributes.position.needsUpdate=true;
    geo.attributes.hyperColor.needsUpdate=true;
    geo.attributes.size.needsUpdate=true;
    geo.attributes.intensity.needsUpdate=true;
    eGeo.attributes.position.needsUpdate=true;
    eGeo.attributes.color.needsUpdate=true;
    renderer.render(scene,camera);
    if(now-lastLabel>60){updateLabels(projected,rotated,wMin,wRange,dMin,dRange);lastLabel=now;}
  }
  requestAnimationFrame(animate);

  // Resize observer
  const ro=new ResizeObserver(entries=>{
    const r=entries[0].contentRect;
    if(r.width>0&&r.height>0){
      camera.aspect=r.width/r.height;
      camera.updateProjectionMatrix();
      renderer.setSize(r.width,r.height);
    }
  });
  ro.observe(container);
}
})();
