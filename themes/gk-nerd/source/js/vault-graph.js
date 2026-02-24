// Vault 4D Graph - hero visual from Obsidian vault
// 452 nodes, 1314 edges - filtered from real vault data
(function() {
'use strict';

const VAULT_GRAPH = {"c":["idea","ai","wellbeing","design","person","tool","book","place"],"n":[["Serendipity",0],["AI Agents",1],["Mindset",0],["Novelty seeking",0],["Personal OS",0],["Voice Claude",1],["The System",0],["Meditation",2],["Mindfulness",2],["Creativity",0],["Software 3.0",0],["Claude code",1],["Knowledge Management",0],["Quantified self",0],["Design Thinking",3],["Psychology",2],["Consciousness",2],["Flow",0],["Randomness",0],["@Sergey Kadomsky",4],["Words I love",0],["∞→Diversify people I talk to",0],["Exploratory behaviour",0],["Flaneur",0],["AI Creativity",1],["My AI agents and automation",1],["MCP",5],["+Building effective agents",1],["AI Video tools",1],["AI Translation",1],["AI Pair Programming",1],["Artificial Intelligence",0],["AI Business models",1],["Mixture of Agents",1],["Course - Claude Code Lab for Products",1],["Agents UX",1],["Bot UX",3],["Gemini Deep Research",0],["Agents Benchmarking",1],["AI Agents Payments",1],["AI agents for Instagram",1],["AI chat bots",1],["AI Courses",1],["AI Tools for marketing",1],["Large Language Models",1],["Teaching AI Agents to Non-Technical Users - Comprehensive Ideas List",1],["Replit agent",1],["RAG",0],["Cline",0],["OpenAI Operator",1],["AI Art coachings agent",1],["GPT Researcher",1],["+AI agents -- what they are, how they work, and use cases",1],["AI and creativity",1],["Agent Engineering",1],["AI software development agents",1],["Agents",1],["Documentation for AI agents",1],["Active inference",0],["AI automation",1],["Windsurf",0],["AI is more creative than humans",1],["AI Researcher Agents",1],["Ethical Adaptive Triggers Framework",0],["Openinterpreter",0],["Agentic Coding",1],["@Dr. Alia Crum",4],["Body Mass Index (BMI)",0],["Placebo",0],["Personality trait",0],["Learning",0],["+The modern world hijacks your attention. Here’s how to take it back. Amishi Jha",0],["@Amishi Jha",4],["Ed Diener. Serious Research on Happiness",0],["personal knowledge management",0],["Obsidian",5],["Apple Health Data",0],["Avoid over-scaffolding",0],["Lifelogging",0],["Memex",0],["life management",0],["Citizen science",0],["Mac Mini",0],["Omi",0],["Bee",0],["Personal AI",0],["Plaud Note Pin",0],["Vibe coding",0],["Mirai",0],["Friend Wearable AI",0],["MoC - Knowledge Systems",0],["Apple Watch",0],["Local AI Inference",1],["Limitless Pendant",0],["Agent Skills",1],["The System - Telegram Agent",1],["Smart Turn",0],["Wake Word",0],["Self-concordance",0],["Claude Agent SDK",1],["Livekit",0],["People First Funds",0],["Voice agent frontend comparison",1],["system continuity",0],["Drift feedback",0],["Error detection",0],["Solopreneurship",0],["Failure recovery",0],["The System - Integration Architecture",0],["Mindfulness and HRV",2],["Mindfulness and Health",2],["@Jack Kornfield",4],["Meditation and the Brain",2],["@Michael Taft",4],["Meditation teachers",2],["Mindfulness and pain",2],["Mindful Productivity",2],["Mindfulness coaching",2],["Mindfulness Based Cognitive Therapy (MBCT)",2],["Mindfulness questionnaire",2],["@Shinzen Young",4],["Buddhism",0],["Books on Meditation recommended by Michael Taft",6],["Open monitoring",0],["Shamata",0],["@Tara Brach",4],["Mindfulness for Creativity",2],["@Thich Nhat Hanh",4],["Zen",0],["Curiosity",0],["@John Vervaeke",4],["@John Kabat-Zinn",4],["@Fedor Taranenko",4],["@Vincent Horn",4],["five goals or applications of mindfulness",2],["Compassion focused therapy",2],["Definition of Mindfulness",2],["@Dalai Lama",4],["@Victor Shiryaev",4],["Mindfulness and emotions",2],["Integration",0],["Compassion",0],["Acceptance and commitment therapy (ACT)",2],["Introspection",0],["Psychotherapy",2],["@Christopher Germer",4],["@David Lynch",4],["Living a creative lifestyle",0],["Creative Visualization",0],["Create connections",0],["@Andrej Karpathy",4],["Amp",0],["RIPER Workflow",0],["Claude Code Business",1],["llm-cli",1],["Autumn 2025 Overview",0],["Integral Life Overview - October 2025",0],["AGENCY Lab - Claude Project Instructions",1],["Codex",0],["Understanding Claude Code",1],["AI Coding Agents",1],["Serendipity Recommendation Principles",0],["Context Management",0],["Command Line",0],["Continual_Learning_in_Claude_Code",1],["Claude Code Tools",1],["ai-sdk-v5-crash-course",5],["Claude skills",1],["My Focus",0],["claude code post 01",1],["OpenRouter",0],["opencode",0],["Factory AI",0],["Lab Launch Checklist",0],["Claude code how to use",1],["writing on claude code",1],["AI Security",1],["Active Externalism",0],["@Niklas Luhmann",4],["Linking your thinking",0],["Execution",0],["Note-making vs note-taking",0],["Idea generation",0],["Task Management",0],["Trusted systems",0],["Community Knowledge Management",0],["Build a trusted system",0],["@Andy Matuschak",4],["@Nick Milo",4],["Daily note",0],["Getting Things Done",0],["Map of content",0],["Zettelkasten",0],["Signal vs noise",0],["Mind3 community",0],["∞→ Your brain is for having ideas, not for storings them",0],["Maps making",0],["Вечнозеленые заметки должны быть интенсивно перелинкованы",0],["Knowledge Graphs",0],["Evergreen notes",0],["Obsidian alternatives",5],["Knowledge",0],["Вечнозеленые заметки должны быть атомарны",0],["procrastination",0],["Heart Rate Variability",0],["MoC - Health",0],["Local AI",0],["Doing science on your life",0],["Self-monitoring",0],["Self-regulation",0],["Life Mapping Tools",5],["Mood monitoring",0],["@Kevin Kelly",4],["Input Sources for AI System",1],["Proactive Health Management",0],["∞→Disease is shrinkage of capacity for adaptive variation",0],["Journaling",0],["Data lake",0],["AlterEgo",0],["∞→Wide dynamic range is healthy",0],["Wellbeing",0],["Ultrahuman",0],["Oura Ring",0],["Quantified relationships",0],["rumination",0],["+Why we self sabotage the recovery process. Learn how to refuel your brain and body the natural way.",0],["Personal Health Intelligence",0],["Reflective practice",0],["Quantified self course",0],["Behavioral activation monitoring",0],["Sleep tracking",0],["Collect → reflect",0],["Deciding What To Observe",0],["Human-centered design",3],["Problem solving",0],["Shared problem space",0],["Design your life",3],["Innovation",0],["Intelligence",0],["Detection of consciousness",2],["AI Consciousness",2],["Emergentism",0],["@Sam Harris",4],["Spectrum of consciousness",2],["+Your brain hallucinates your conscious reality",0],["Integrated Information Theory",0],["@Francis Crick",4],["Integrative information theory of Consciousness",2],["@Giulio Tononi",4],["Pure consciousness event",2],["Unconscious Bias",0],["Plant consciousness",2],["Focus",0],["Example Motivators",0],["Window of tolerance",0],["@Mihaly Csikszentmihalyi",4],["Deep work",0],["Feel flow",0],["Cognitive performance",0],["Mental states",0],["Hyperfocus",0],["Dynamic Difficulty Adjustment",0],["Feedback is crucial for learning",0],["The Scale of subjective states",0],["Entropy",0],["Brain",0],["Synchronicity",0],["Touch",0],["Zeigarnik effect",0],["Diversity",0],["Acceptance",0],["Autonomy",0],["Intention",0],["Commitment",0],["Writing",6],["Xenohormesis",0],["Deliberation",0],["@Alan W. Watts",4],["Agency (book)",6],["Polymaths",0],["Vulnerability",0],["Feedback loop",0],["Sex",0],["Awe",0],["Generalist",0],["Love",0],["Singularity",0],["@Gleb Kalinin",4],["Unpredictibility",0],["Emergence",0],["Synergy",0],["Experiment",0],["T-Shaped Person",0],["Not-knowing",0],["Human in focus",0],["Redundancy",0],["Awareness",0],["Long-term",0],["∞→Conversation is primary medium for developing ideas",0],["Relocation to Berlin",7],["How I use Obsidian for networking",5],["@Sigmund Freud",4],["Operant Conditioning",0],["@B. F. Skinner",4],["Unconscious",0],["@Paul Bloom",4],["@Ivan Pavlov",4],["Little Albert experiment",0],["Parental investment",0],["Koinophilia",0],["average faces",0],["Extinction (behaviour)",0],["Habituation",0],["Organism-environment system",0],["Multipotential",0],["Community",0],["Consulting Agreement",0],["Obsidian as a self-discovery tool",5],["@Anton Simanenko",4],["Building Skills for Claude",1],["n8n",0],["Agentic Knowledge Management",1],["Attention",0],["Salience cannot be computed",0],["Prompt engineering",0],["Salience",0],["Claude",1],["LSP",0],["@Tim Berners-Lee",4],["@Richard Feynman",4],["Antidisciplinarity",0],["Interdisciplinary Research",0],["@Salman Khan",4],["Collective Intelligence",0],["@Peter Senge",4],["Language Models",1],["Reasoning",0],["Notion",0],["ChatGPT",1],["Research on AI",0],["Robots",0],["Dangers of AI",0],["Machine learning",1],["Alignment problem",0],["AI Explained",1],["Oppurtunities in AI",0],["Business Models",1],["Business Model Canvas",1],["Personal Assistant",0],["Telegram",0],["Chat Bots",0],["General agent",1],["MoC - AI & Agents",1],["Obsidian + AI principles and approaches",1],["Obsidain AI",0],["Deliberate practice",0],["AI Therapy Analysis",2],["Think&Link 3",0],["OSWorld",0],["@Alexander Povaliaev",4],["AI Psychotherapy",2],["LangChain. Chat with Your Data",0],["@Harrison Chase",4],["Skin-Covered Bastards (chat)",0],["Generative AI for Everyone",1],["@Sam Altman",4],["+RouteLLM achieves 90- GPT4o Quality AND 80- CHEAPER - YouTube",1],["VibeBerlin Telegram bot",7],["AI for research papers",1],["Prompt Caching",0],["GraphRAG",0],["embeddings",0],["Contextual Retrieval",0],["Citations in Anthropic API",5],["My AI Project Ideas",1],["Tavily",0],["OpenAI Deep Research",1],["Agentic Behavior and Design Notes",1],["Subagents",1],["Devin",0],["Automation",0],["Zed AI",0],["Cursorisation",0],["Source of info on AI",0],["SWE-Agent",1],["GitHub Copilot",0],["Aider",0],["GSD Framework",0],["Lovable.dev",0],["My Obsidian plugins",5],["Pythogora",0],["OpenDevin",0],["Claude.md",1],["Documentation",0],["Behaviour",0],["Reinforcement learning",0],["Decision-making",0],["@Karl Friston",4],["Predictive processing",0],["Waste in Lean Manufacturing",0],["Eliminate. Simplify. Automate. Delegate.",0],["Text-To-Speech",0],["Speech to text",0],["Hallucinations as intelligence feature",0],["+Claude 3.5 Sonnet for agentic coding - YouTube",1],["Emergent abilities in language models",1],["Error-correction",0],["Collective Decision making",0],["@Andrew Huberman",4],["C-Reactive Protein",0],["Extraversion",0],["Openness",0],["HEXACO",0],["Neuroticism",0],["Alexithymia",0],["The Big Five Personality model",1],["Conscientiousness",0],["Agreeableness",0],["Testing effect",0],["Studying in Obsidian",5],["Meta-skills",0],["@Igor Ivanov",4],["Dopamine",0],["Learning curve",0],["Spaced Repetition",0],["Generation effect",0],["Implicit learning",0],["Metacognition",0],["Ambivalence",0],["Attunement",0],["Being",0],["Becoming",0],["Coherence",0],["Collaboration",0],["Connection",0],["Confusion",0],["Difference",0],["Externalization",0],["Inquiry",0],["Mirror",0],["Paradox",0],["Presence",0],["Resonance",0],["Surrender",0],["Variety",0],["Wicked Problem",0],["Witness",0]],"e":[[0,18],[0,19],[0,20],[0,21],[0,22],[0,23],[1,24],[1,25],[1,26],[1,27],[1,28],[1,9],[1,29],[1,30],[1,31],[1,32],[1,33],[1,34],[1,35],[1,36],[1,37],[1,38],[1,39],[1,40],[1,41],[1,42],[1,43],[1,44],[1,45],[1,46],[1,47],[1,48],[1,49],[1,50],[1,51],[1,11],[1,52],[1,53],[1,54],[1,55],[1,56],[1,57],[1,58],[1,59],[1,60],[1,61],[1,62],[1,63],[1,64],[1,65],[2,66],[2,67],[2,68],[3,69],[3,70],[3,71],[3,72],[3,22],[3,73],[4,74],[4,10],[4,75],[4,76],[4,77],[4,78],[4,79],[4,80],[4,6],[4,81],[4,82],[4,13],[4,83],[4,84],[4,85],[4,86],[4,87],[4,11],[4,88],[4,89],[4,90],[4,91],[4,5],[4,92],[4,93],[4,94],[5,95],[5,10],[5,96],[5,97],[5,98],[5,6],[5,99],[5,100],[5,82],[5,101],[5,87],[5,94],[5,102],[6,95],[6,10],[6,103],[6,75],[6,76],[6,82],[6,104],[6,105],[6,106],[6,107],[6,11],[6,108],[7,109],[7,110],[7,111],[7,112],[7,113],[7,8],[7,114],[7,115],[7,116],[7,117],[7,118],[7,119],[7,120],[7,121],[7,122],[7,123],[7,124],[7,125],[7,126],[7,127],[7,128],[8,129],[8,130],[8,131],[8,109],[8,110],[8,111],[8,132],[8,112],[8,113],[8,133],[8,134],[8,135],[8,114],[8,117],[8,116],[8,136],[8,118],[8,137],[8,138],[8,139],[8,119],[8,120],[8,121],[8,140],[8,122],[8,123],[8,141],[8,125],[8,126],[8,142],[8,143],[8,144],[8,145],[9,53],[9,126],[9,146],[9,147],[9,148],[9,149],[9,9],[10,150],[10,99],[10,87],[11,151],[11,152],[11,153],[11,154],[11,155],[11,156],[11,157],[11,158],[11,34],[11,159],[11,160],[11,161],[11,162],[11,163],[11,164],[11,165],[11,166],[11,167],[11,87],[11,168],[11,169],[11,56],[11,170],[11,171],[11,172],[11,173],[11,174],[11,175],[11,65],[11,176],[12,177],[12,178],[12,75],[12,179],[12,180],[12,181],[12,182],[12,183],[12,184],[12,185],[12,186],[12,187],[12,188],[12,189],[12,190],[12,191],[12,192],[12,193],[12,194],[12,195],[12,196],[12,197],[12,198],[12,199],[12,200],[12,201],[12,202],[12,203],[13,204],[13,205],[13,206],[13,207],[13,76],[13,208],[13,209],[13,210],[13,211],[13,78],[13,80],[13,212],[13,22],[13,13],[13,213],[13,214],[13,215],[13,216],[13,217],[13,218],[13,219],[13,220],[13,221],[13,222],[13,223],[13,224],[13,225],[13,226],[13,227],[13,228],[13,229],[13,230],[13,93],[13,231],[13,232],[14,233],[14,234],[14,235],[14,236],[14,237],[16,238],[16,239],[16,240],[16,241],[16,242],[16,243],[16,244],[16,16],[16,245],[16,246],[16,247],[16,248],[16,249],[16,250],[16,251],[17,252],[17,253],[17,254],[17,255],[17,256],[17,257],[17,258],[17,259],[17,260],[17,261],[17,262],[17,263],[18,264],[20,129],[20,265],[20,266],[20,177],[20,267],[20,268],[20,269],[20,270],[20,271],[20,272],[20,273],[8,20],[20,274],[20,275],[20,276],[20,277],[20,278],[20,279],[20,280],[20,281],[20,282],[20,283],[20,284],[20,285],[20,286],[20,287],[20,288],[20,289],[20,290],[20,291],[20,292],[20,293],[20,294],[20,295],[20,296],[20,297],[21,298],[21,299],[21,300],[22,313],[3,23],[23,317],[24,318],[25,26],[25,319],[25,320],[25,321],[26,47],[26,48],[26,326],[26,319],[26,327],[26,27],[26,75],[27,319],[29,31],[29,44],[31,53],[31,335],[31,336],[31,59],[31,337],[31,338],[31,339],[31,340],[31,341],[31,342],[31,343],[31,344],[31,345],[32,346],[32,347],[34,162],[34,157],[35,45],[35,348],[35,54],[35,36],[35,63],[36,348],[36,349],[36,63],[36,350],[38,358],[41,359],[31,41],[41,335],[41,338],[41,360],[41,342],[42,361],[31,42],[42,362],[42,363],[42,364],[44,339],[44,365],[31,44],[44,326],[44,366],[42,45],[45,65],[46,367],[46,55],[47,368],[47,369],[47,370],[47,371],[47,372],[47,373],[11,47],[44,47],[48,65],[50,374],[51,375],[51,376],[37,51],[53,61],[54,55],[54,377],[54,94],[25,55],[55,378],[55,379],[55,380],[30,55],[55,381],[55,382],[55,383],[48,55],[55,384],[55,385],[55,386],[11,55],[55,387],[55,388],[55,389],[55,390],[55,60],[55,391],[55,64],[55,65],[56,392],[57,393],[57,65],[58,394],[58,395],[58,396],[58,397],[58,398],[59,399],[59,400],[46,60],[60,87],[60,65],[9,61],[62,376],[49,62],[37,62],[51,62],[63,348],[64,163],[64,401],[64,402],[44,64],[65,403],[65,379],[65,238],[65,404],[65,262],[65,276],[30,65],[65,336],[65,234],[65,405],[65,321],[65,406],[65,355],[65,384],[65,87],[65,386],[65,391],[65,407],[66,408],[66,68],[67,409],[67,204],[69,410],[69,411],[69,412],[69,413],[69,414],[69,415],[69,416],[69,417],[70,418],[70,419],[70,420],[70,421],[70,422],[70,181],[70,423],[70,424],[70,425],[17,70],[70,426],[70,427],[71,322],[71,72],[8,71],[72,322],[8,72],[73,137],[73,285],[74,419],[12,74],[74,155],[74,75],[9,74],[74,276],[74,179],[74,181],[74,234],[74,184],[74,185],[74,423],[74,186],[74,321],[74,190],[74,424],[74,191],[74,355],[65,74],[74,192],[74,193],[74,425],[74,326],[74,197],[55,74],[70,74],[74,199],[74,201],[74,202],[75,274],[75,179],[75,181],[75,192],[76,204],[76,222],[6,77],[10,77],[11,77],[79,177],[79,90],[79,328],[79,192],[75,79],[74,80],[80,322],[76,80],[80,209],[80,98],[6,80],[80,190],[80,168],[5,80],[31,81],[13,81],[81,213],[78,83],[83,86],[5,83],[13,83],[83,93],[83,84],[78,84],[84,86],[13,84],[84,93],[78,86],[5,86],[13,86],[86,93],[87,150],[87,367],[87,158],[75,88],[6,88],[88,92],[5,88],[82,88],[10,88],[76,88],[11,88],[84,89],[86,89],[89,93],[83,89],[74,90],[90,328],[75,90],[90,210],[90,252],[90,99],[90,184],[90,185],[90,354],[90,298],[90,191],[90,162],[90,193],[90,195],[90,168],[1,90],[90,198],[90,325],[90,199],[76,91],[10,92],[6,92],[82,92],[13,92],[11,92],[5,92],[94,352],[11,94],[10,95],[75,95],[76,95],[94,95],[95,99],[13,95],[4,95],[11,95],[95,96],[96,100],[96,97],[96,402],[98,322],[34,98],[98,106],[95,100],[101,106],[103,105],[103,104],[103,107],[4,104],[104,325],[104,105],[105,107],[5,106],[106,287],[104,107],[95,108],[4,108],[5,108],[10,108],[108,352],[103,108],[11,108],[111,125],[112,112],[112,128],[112,141],[113,120],[112,113],[113,122],[114,125],[111,114],[114,138],[114,133],[114,242],[114,145],[115,138],[115,120],[117,136],[110,118],[121,124],[121,128],[111,122],[126,148],[127,141],[127,128],[120,128],[123,128],[8,128],[116,128],[129,129],[130,138],[121,130],[120,134],[135,141],[129,136],[130,136],[136,209],[136,242],[7,136],[136,145],[121,137],[120,138],[7,138],[109,139],[16,140],[140,140],[132,142],[142,270],[138,142],[142,144],[150,338],[151,171],[151,172],[151,160],[65,151],[153,165],[151,153],[34,153],[26,153],[153,172],[153,160],[153,158],[65,153],[154,170],[75,155],[155,157],[155,185],[155,321],[155,407],[155,355],[65,155],[65,158],[158,321],[159,175],[159,174],[55,160],[48,160],[1,160],[160,379],[60,160],[160,171],[160,172],[160,327],[160,386],[158,160],[65,160],[161,338],[12,162],[163,171],[26,164],[164,167],[65,164],[165,351],[159,165],[165,352],[163,165],[165,327],[56,165],[5,165],[165,174],[165,175],[34,166],[167,326],[168,322],[95,168],[168,205],[34,168],[4,168],[5,168],[165,170],[44,170],[1,171],[48,171],[171,172],[171,386],[158,171],[1,172],[65,172],[34,173],[157,173],[169,175],[54,176],[176,352],[75,177],[177,186],[177,190],[4,177],[177,192],[177,325],[177,313],[178,192],[179,191],[179,181],[179,193],[179,196],[179,187],[179,188],[180,186],[181,425],[181,197],[14,182],[183,190],[116,183],[184,189],[184,190],[177,184],[179,184],[180,184],[183,184],[184,195],[184,199],[184,186],[75,185],[185,185],[185,315],[185,194],[185,198],[186,200],[186,400],[75,186],[187,199],[75,187],[187,187],[4,189],[190,268],[190,195],[186,190],[191,193],[191,199],[191,196],[75,191],[188,191],[192,199],[193,322],[181,193],[193,199],[193,196],[194,359],[74,195],[195,268],[195,199],[47,198],[198,370],[178,199],[199,202],[197,199],[200,359],[179,200],[75,200],[177,201],[201,322],[201,238],[75,201],[31,201],[201,331],[1,201],[70,201],[204,204],[91,204],[204,215],[206,217],[207,216],[22,207],[208,211],[208,227],[208,259],[208,229],[208,216],[209,224],[210,300],[210,211],[4,210],[168,210],[210,216],[8,211],[213,214],[215,219],[216,227],[216,216],[216,274],[218,401],[219,322],[204,219],[219,330],[219,224],[221,226],[204,221],[219,221],[221,222],[222,230],[222,226],[204,222],[219,222],[214,222],[215,222],[224,224],[78,225],[213,226],[214,226],[227,355],[227,227],[225,228],[78,229],[228,231],[232,236],[234,238],[9,234],[234,396],[234,235],[17,234],[235,235],[235,330],[235,333],[235,331],[215,235],[236,396],[17,236],[236,236],[3,237],[238,403],[238,238],[238,240],[9,238],[238,398],[31,238],[14,238],[17,238],[238,427],[238,333],[238,251],[239,247],[239,249],[241,289],[244,247],[244,397],[245,248],[239,245],[247,248],[130,249],[250,305],[252,322],[168,252],[124,252],[209,254],[258,265],[258,322],[234,258],[258,259],[259,263],[260,322],[188,261],[262,298],[31,264],[268,322],[8,270],[73,271],[272,273],[142,273],[276,336],[276,396],[276,355],[216,276],[276,407],[277,313],[7,277],[279,284],[281,298],[282,305],[284,292],[285,422],[282,285],[278,287],[287,294],[288,341],[289,405],[187,298],[117,299],[302,303],[70,306],[303,306],[269,309],[309,310],[311,311],[307,311],[70,312],[8,312],[129,314],[219,314],[19,314],[70,314],[235,314],[292,314],[3,314],[314,330],[237,314],[314,331],[287,315],[75,317],[319,378],[57,319],[319,326],[59,320],[6,320],[99,320],[47,321],[75,321],[130,322],[8,322],[7,322],[31,324],[44,324],[322,325],[325,398],[168,326],[65,327],[4,328],[70,329],[330,331],[215,330],[237,331],[219,331],[140,331],[1,331],[331,333],[234,333],[333,396],[333,407],[200,337],[75,337],[1,340],[44,340],[341,343],[335,342],[32,345],[85,348],[338,349],[41,350],[150,351],[4,351],[1,351],[10,351],[5,351],[351,352],[11,351],[94,351],[10,352],[42,352],[341,352],[352,354],[1,352],[170,352],[54,352],[5,352],[97,352],[4,352],[52,352],[55,352],[27,352],[343,352],[352,360],[100,352],[47,352],[352,356],[338,354],[326,354],[75,354],[262,355],[281,355],[355,423],[355,424],[355,406],[17,355],[70,355],[338,356],[326,356],[357,359],[116,357],[1,358],[335,360],[350,360],[361,362],[361,371],[44,361],[318,363],[31,363],[44,368],[27,377],[1,377],[65,377],[374,378],[39,378],[378,387],[379,384],[379,391],[1,379],[380,400],[381,386],[381,385],[382,388],[318,383],[344,383],[384,391],[17,385],[385,385],[385,386],[379,386],[386,391],[57,387],[46,390],[379,390],[326,391],[1,391],[99,392],[167,392],[11,392],[70,395],[56,398],[399,400],[100,401],[401,402],[5,402],[240,403],[208,403],[398,403],[403,427],[31,403],[244,403],[7,403],[403,406],[403,426],[239,403],[9,403],[395,403],[105,403],[355,403],[16,403],[325,403],[322,403],[234,403],[44,403],[247,403],[70,403],[251,403],[44,405],[238,406],[262,406],[398,406],[406,422],[395,406],[396,406],[281,406],[44,406],[16,406],[406,426],[406,427],[58,406],[70,406],[295,406],[75,407],[396,407],[185,407],[406,407],[194,407],[198,407],[411,415],[410,412],[412,416],[412,417],[412,415],[8,413],[413,415],[410,415],[415,416],[415,417],[418,418],[419,424],[75,419],[302,422],[418,425],[16,427],[8,427],[274,427],[20,428],[20,429],[0,429],[20,430],[0,430],[20,431],[20,432],[20,433],[20,434],[20,435],[20,436],[20,437],[20,438],[20,439],[20,440],[20,441],[0,441],[20,442],[0,442],[20,443],[0,443],[20,444],[20,445],[20,446],[0,446]]};

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
  let paused=false, graphHidden=false, speedMultiplier=1;

  // Drag controls
  let dragging=false,lastX=0,lastY=0,cameraZ=7,dragMoved=false;
  canvas.addEventListener('pointerdown',e=>{dragging=true;dragMoved=false;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId);canvas.style.cursor='grabbing';});
  window.addEventListener('pointermove',e=>{
    if(!dragging)return;
    const dx=e.clientX-lastX,dy=e.clientY-lastY;
    if(Math.abs(dx)>2||Math.abs(dy)>2)dragMoved=true;
    lastX=e.clientX;lastY=e.clientY;
    if(e.shiftKey){rot.xw+=dx*0.003;rot.yw+=dy*0.003;}
    else{rot.xy+=dx*0.002;rot.xz+=dy*0.002;}
  });
  window.addEventListener('pointerup',()=>{dragging=false;canvas.style.cursor='grab';});
  canvas.addEventListener('wheel',e=>{e.preventDefault();cameraZ=clamp(cameraZ-Math.sign(e.deltaY)*0.4,3,14);},{passive:false});

  // Click-to-zoom state
  let focusedNode=-1, zoomAnim=null, lastProjected=null;
  const ZOOM_DURATION=500; // ms
  const ZOOM_DISTANCE=3.5; // camera distance when zoomed in
  const defaultCameraZ=7;

  // Focused node label overlay
  const focusLabel=document.createElement('div');
  focusLabel.style.cssText='position:absolute;font-family:var(--font-mono,"Geist Mono",monospace);white-space:nowrap;pointer-events:none;text-shadow:0 0 10px rgba(26,26,31,0.95),0 0 20px rgba(26,26,31,0.8);will-change:transform,opacity;font-size:16px;opacity:0;transition:opacity 0.3s ease;z-index:10;';
  labelLayer.appendChild(focusLabel);

  function easeInOutCubic(t){return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}

  function startZoomTo(nodeIdx){
    const p=lastProjected[nodeIdx];
    if(!p)return;
    const startPos={x:camera.position.x,y:camera.position.y,z:camera.position.z};
    // Target: look at node from a closer distance along the camera->node line
    const nx=p[0],ny=p[1],nz=p[2];
    // Camera approaches node but stays offset in Z
    const dx=nx-camera.position.x,dy=ny-camera.position.y,dz=nz-camera.position.z;
    const dist=Math.sqrt(dx*dx+dy*dy+dz*dz);
    const approach=Math.max(0,dist-ZOOM_DISTANCE)/dist;
    const targetPos={
      x:startPos.x+dx*approach,
      y:startPos.y+dy*approach,
      z:startPos.z+dz*approach
    };
    const targetLookAt={x:nx,y:ny,z:nz};
    // If already focused on another node, start lookAt from that node's position
    let startLookAt={x:0,y:0,z:0};
    if(focusedNode>=0&&lastProjected&&lastProjected[focusedNode]){
      const fp=lastProjected[focusedNode];
      startLookAt={x:fp[0],y:fp[1],z:fp[2]};
    }
    const startTime=performance.now();
    focusedNode=nodeIdx;
    zoomAnim={startPos,targetPos,startLookAt,targetLookAt,startTime,zooming:'in'};
    // Show label
    const node=nodes[nodeIdx];
    const cc=CAT_COLORS[cats[node[1]]]||[1,0.42,0.21];
    focusLabel.textContent=node[0];
    focusLabel.style.color='rgba('+Math.round(cc[0]*255)+','+Math.round(cc[1]*255)+','+Math.round(cc[2]*255)+',1)';
    focusLabel.style.opacity='1';
    canvas.style.cursor='pointer';
  }

  function startZoomOut(){
    const startPos={x:camera.position.x,y:camera.position.y,z:camera.position.z};
    const targetPos={x:0,y:0,z:defaultCameraZ};
    // Use the current focused node position (accounts for rotation drift)
    let startLookAt={x:0,y:0,z:0};
    if(focusedNode>=0&&lastProjected&&lastProjected[focusedNode]){
      const fp=lastProjected[focusedNode];
      startLookAt={x:fp[0],y:fp[1],z:fp[2]};
    }
    const targetLookAt={x:0,y:0,z:0};
    const startTime=performance.now();
    focusedNode=-1;
    zoomAnim={startPos,targetPos,startLookAt,targetLookAt,startTime,zooming:'out'};
    focusLabel.style.opacity='0';
    canvas.style.cursor='grab';
  }

  function hitTestNode(clientX,clientY){
    if(!lastProjected)return -1;
    const rect=canvas.getBoundingClientRect();
    const cw=canvas.clientWidth,ch=canvas.clientHeight;
    const hw=cw/2,hh=ch/2;
    const mx=clientX-rect.left,my=clientY-rect.top;
    let bestIdx=-1,bestDist=Infinity;
    const threshold=20; // px hit radius
    for(let i=0;i<nodeCount;i++){
      const p=lastProjected[i];
      if(!p)continue;
      tmpV.set(p[0],p[1],p[2]).project(camera);
      if(tmpV.z>1||tmpV.z<0)continue;
      const sx=(tmpV.x*hw)+hw,sy=(-tmpV.y*hh)+hh;
      const dx=sx-mx,dy=sy-my;
      const d=Math.sqrt(dx*dx+dy*dy);
      if(d<threshold&&d<bestDist){bestDist=d;bestIdx=i;}
    }
    return bestIdx;
  }

  canvas.addEventListener('click',e=>{
    if(dragMoved)return; // ignore drag-end clicks
    const hit=hitTestNode(e.clientX,e.clientY);
    if(hit>=0&&hit!==focusedNode){
      startZoomTo(hit);
    }else{
      if(focusedNode>=0)startZoomOut();
    }
  });

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
    if(paused)return;
    const dt=0.008*speedMultiplier;
    const isFocused=focusedNode>=0;
    const isAnimating=zoomAnim&&!zoomAnim.done;

    // 1. Update auto-rotation (slowed when focused)
    const rotScale=isFocused?0.15:1;
    if(!dragging&&!isAnimating){
      autoTime+=dt;
      rot.xw+=speed.xw*dt*rotScale;rot.yw+=speed.yw*dt*rotScale;rot.zw+=speed.zw*dt*rotScale;
      rot.xy+=speed.xy*dt*rotScale;rot.yz+=speed.yz*dt*rotScale;
    }

    // 2. Camera positioning
    if(isAnimating){
      // Tween camera position and lookAt during zoom
      const elapsed=now-zoomAnim.startTime;
      const t=clamp(elapsed/ZOOM_DURATION,0,1);
      const et=easeInOutCubic(t);
      const sp=zoomAnim.startPos,tp=zoomAnim.targetPos;
      const sl=zoomAnim.startLookAt,tl=zoomAnim.targetLookAt;
      camera.position.x=sp.x+(tp.x-sp.x)*et;
      camera.position.y=sp.y+(tp.y-sp.y)*et;
      camera.position.z=sp.z+(tp.z-sp.z)*et;
      camera.lookAt(
        sl.x+(tl.x-sl.x)*et,
        sl.y+(tl.y-sl.y)*et,
        sl.z+(tl.z-sl.z)*et
      );
      if(t>=1){
        if(zoomAnim.zooming==='out'){zoomAnim=null;cameraZ=defaultCameraZ;}
        else{zoomAnim.done=true;}
      }
    }else if(!isFocused){
      // Default unfocused camera behavior
      camera.position.z+=(cameraZ-camera.position.z)*0.08;
      if(!dragging){camera.position.x=Math.sin(autoTime*0.08)*0.4;camera.position.y=Math.cos(autoTime*0.06)*0.25;}
      camera.lookAt(0,0,0);
    }
    // When focused+done animating, lookAt is set after projection below

    // 3. Project 4D -> 3D
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
    lastProjected=projected;

    // 4. When focused (post-animation), track the node
    if(isFocused&&!isAnimating){
      const fp=projected[focusedNode];
      if(fp)camera.lookAt(fp[0],fp[1],fp[2]);
    }

    // 5. Update node visuals
    for(let i=0;i<nodeCount;i++){
      const nw=(rotated[i][3]-wMin)/wRange;
      const cc=CAT_COLORS[cats[nodes[i][1]]]||[1,0.42,0.21];
      colorArr[i*3]=cc[0];colorArr[i*3+1]=cc[1];colorArr[i*3+2]=cc[2];
      if(i===focusedNode){
        sizeArr[i]=0.25+degrees[i]*0.035;
        intArr[i]=1.3;
      }else{
        sizeArr[i]=0.08+degrees[i]*0.025;
        intArr[i]=0.35+nw*0.9;
      }
    }

    // 6. Update edge visuals
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

    // 7. Render
    geo.attributes.position.needsUpdate=true;
    geo.attributes.hyperColor.needsUpdate=true;
    geo.attributes.size.needsUpdate=true;
    geo.attributes.intensity.needsUpdate=true;
    eGeo.attributes.position.needsUpdate=true;
    eGeo.attributes.color.needsUpdate=true;
    renderer.render(scene,camera);

    // 8. Labels
    if(now-lastLabel>60){
      updateLabels(projected,rotated,wMin,wRange,dMin,dRange);
      lastLabel=now;
    }

    // 9. Position the focus label above the focused node
    if(isFocused){
      const fp=projected[focusedNode];
      if(fp){
        const cw=canvas.clientWidth,ch=canvas.clientHeight;
        tmpV.set(fp[0],fp[1],fp[2]).project(camera);
        const sx=(tmpV.x*cw/2)+cw/2,sy=(-tmpV.y*ch/2)+ch/2;
        focusLabel.style.transform='translate('+sx+'px,'+sy+'px) translate(-50%,-180%)';
      }
    }
  }
  requestAnimationFrame(animate);

  // Graph controls
  const pauseBtn=document.getElementById('graph-pause');
  const toggleBtn=document.getElementById('graph-toggle');
  const speedSlider=document.getElementById('graph-speed');
  const heroVisual=document.getElementById('hero-visual');

  if(pauseBtn) pauseBtn.addEventListener('click',()=>{
    paused=!paused;
    pauseBtn.textContent=paused?'▶':'⏸';
    pauseBtn.title=paused?'Resume graph':'Pause graph';
  });

  if(toggleBtn) toggleBtn.addEventListener('click',()=>{
    graphHidden=!graphHidden;
    heroVisual.style.transition='opacity 0.4s ease';
    heroVisual.style.opacity=graphHidden?'0':'';
    toggleBtn.textContent=graphHidden?'○':'◉';
    toggleBtn.title=graphHidden?'Show graph':'Hide graph';
  });

  if(speedSlider) speedSlider.addEventListener('input',e=>{
    speedMultiplier=parseFloat(e.target.value);
  });

  // Fullscreen toggle (desktop)
  const fsBtn=document.getElementById('graph-fullscreen');
  const heroEl=document.getElementById('hero');
  if(fsBtn&&heroEl) fsBtn.addEventListener('click',()=>{
    const isFs=heroEl.classList.toggle('graph-fullscreen');
    fsBtn.textContent=isFs?'✕':'⛶';
    fsBtn.title=isFs?'Exit fullscreen':'Fullscreen graph';
    if(isFs){
      const r=container.getBoundingClientRect();
      if(r.width>0&&r.height>0){camera.aspect=r.width/r.height;camera.updateProjectionMatrix();renderer.setSize(r.width,r.height);}
    }
  });

  // Mobile graph reveal
  const mobileReveal=document.getElementById('graph-mobile-reveal');
  const graphControls=document.getElementById('graph-controls');
  if(mobileReveal) mobileReveal.addEventListener('click',e=>{
    e.preventDefault();
    heroVisual.classList.add('graph-mobile-active');
    heroVisual.style.opacity='';
    if(graphControls) graphControls.classList.add('graph-mobile-active');
    mobileReveal.classList.add('hidden');
    const r=container.getBoundingClientRect();
    if(r.width>0&&r.height>0){camera.aspect=r.width/r.height;camera.updateProjectionMatrix();renderer.setSize(r.width,r.height);}
  });

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
