from graphviz import Digraph

# 创建一个有向图
dot = Digraph(comment='AI Competition 2024')

# 添加节点和边
dot.node('AI领域竞争', 'AI领域竞争')
dot.node('BigModels', '大模型')
dot.node('VideoGeneration', '视频生成')
dot.node('ComputePower', '算力')
dot.node('BioChemistry', '生物化学')
dot.node('FinancialStrength', '财务实力')
dot.node('TalentLoss', '人才流失')

dot.node('GPT4o', 'OpenAI发布GPT-4o模型')
dot.node('ProjectAstraVeo', 'Google发布Project Astra和Veo模型')
dot.node('Gemini超越GPT4o', 'Gemini 1.5 Pro超越GPT-4o')
dot.node('O1Model', 'OpenAI推出o1模型')
dot.node('AstraMariner', 'Google发布Project Astra和Project Mariner')
dot.node('ChatGPTVideo', 'OpenAI为ChatGPT添加实时视频理解功能')
dot.node('Gemini20', 'Google发布Gemini 2.0和Flash Thinking')

dot.node('SoraProject', 'Sora项目')
dot.node('TimBrooks', 'Tim Brooks离职加入Google')
dot.node('AlphaFold3', 'Google DeepMind的AlphaFold 3突破')

dot.node('AlphabetFinancials', 'Alphabet财务数据强劲')
dot.node('OpenAIFinancials', 'OpenAI面临财务困境')

dot.node('CoreTeamSplit', 'OpenAI核心团队分崩离析')

# 连接节点
dot.edges(['AI领域竞争-BigModels', 'AI领域竞争-VideoGeneration', 
          'AI领域竞争-ComputePower', 'AI领域竞争-BioChemistry', 
          'AI领域竞争-FinancialStrength', 'AI领域竞争-TalentLoss'])

dot.edge('BigModels', 'GPT4o')
dot.edge('BigModels', 'ProjectAstraVeo')
dot.edge('BigModels', 'Gemini超越GPT4o')
dot.edge('BigModels', 'O1Model')

dot.edge('VideoGeneration', 'SoraProject')
dot.edge('VideoGeneration', 'TimBrooks')

dot.edge('BioChemistry', 'AlphaFold3')

dot.edge('FinancialStrength', 'AlphabetFinancials')
dot.edge('FinancialStrength', 'OpenAIFinancials')

dot.edge('TalentLoss', 'CoreTeamSplit')

# 输出和保存图像
dot.render('AI_Competition_2024', view=True)