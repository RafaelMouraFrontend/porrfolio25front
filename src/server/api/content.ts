import { defineEventHandler, getQuery } from 'h3';
import { promises as fs } from 'fs';
import { resolve } from 'path';

export default defineEventHandler(async (event) => {
  try {
    const { pageName } = getQuery(event);
    
    if (!pageName) {
      throw new Error("Informe o parâmetro 'pageName'");
    }
    
    // Caminho absoluto para o arquivo
    const filePath = resolve(process.cwd(), `src/server/data/content/${pageName}.json`);
    
    // Verificar se o arquivo existe
    await fs.access(filePath);
    
    // Ler e retornar o conteúdo
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Conteúdo não encontrado:', error);
    return { error: 'Conteúdo não encontrado' };
  }
});