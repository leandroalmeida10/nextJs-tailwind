import { useRouter } from 'next/router'
import { useState } from 'react'
import { formatConsult, formatDateBrazilToAmerican } from '../utils/format'
import { getDataCosts } from '../../../services/costs-services'
import { useQuery } from 'react-query'
import { IRequestGetDataCosts } from '../../../services/costs-services/types'
import { isValidDateFormatBrazilian } from '../utils/validate'

export default function useHistoryConsumer() {
  const router = useRouter()
  const { typeConsult } = router.query
  const pageWithDetailsCost = formatConsult(typeConsult?.toString()) === ''
  const [page, setPage] = useState(1)
  const [dateInitial, setDateInitial] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [description, setDescription] = useState('')

  const typeConsumer = pageWithDetailsCost
    ? description
    : typeConsult?.toString()

  const dateInitialFormated = isValidDateFormatBrazilian(dateInitial)
    ? formatDateBrazilToAmerican(dateInitial)
    : undefined

  const dateEndFormated = isValidDateFormatBrazilian(dateEnd)
    ? formatDateBrazilToAmerican(dateEnd)
    : undefined

  const { data, isLoading } = useQuery<IRequestGetDataCosts>(
    ['get-costs', page, typeConsumer, dateInitialFormated, dateEndFormated],
    () =>
      getDataCosts(page, typeConsumer, dateInitialFormated, dateEndFormated),
  )

  return {
    typeConsult,
    page,
    setPage,
    setDateInitial,
    setDateEnd,
    setDescription,
    typeConsumer,
    dateInitialFormated,
    dateEndFormated,
    data,
    isLoading,
    pageWithDetailsCost,
  }
}
