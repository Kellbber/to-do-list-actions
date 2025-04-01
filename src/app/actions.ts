'use server'

import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import { db } from '../../firebase'

const collectionRef = collection(db, 'items')

// 🔹 Listar Itens
export async function getItems() {
  try {
    const snapshot = await getDocs(collectionRef)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name || ''
    }))
  } catch (error) {
    console.error('Erro ao buscar itens:', error)
    throw new Error('Não foi possível carregar os itens.')
  }
}

// 🔹 Adicionar Item
export async function addItem(name: string) {
  try {
    const docRef = await addDoc(collectionRef, { name })
    return { id: docRef.id, name }
  } catch (error) {
    console.error('Erro ao adicionar item:', error)
    throw new Error('Não foi possível adicionar o item.')
  }
}

// 🔹 Atualizar Item
export async function updateItem(id: string, newName: string) {
  try {
    const itemRef = doc(db, 'items', id)
    await updateDoc(itemRef, { name: newName })
    return { id, name: newName }
  } catch (error) {
    console.error('Erro ao atualizar item:', error)
    throw new Error('Não foi possível atualizar o item.')
  }
}

// 🔹 Deletar Item
export async function deleteItem(id: string) {
  try {
    const itemRef = doc(db, 'items', id)
    await deleteDoc(itemRef)
    return { id }
  } catch (error) {
    console.error('Erro ao deletar item:', error)
    throw new Error('Não foi possível deletar o item.')
  }
}
