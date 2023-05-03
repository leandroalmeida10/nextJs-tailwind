import { useState } from 'react'
import { useRouter } from 'next/router'
import { isValidDateFormatBrazilian } from '../../historyConsummer/utils/validate'
import { formatDateBrazilToAmerican } from '../../historyConsummer/utils/format'
import { IResponseGetCountPerType } from '../../../services/costs-services/types'
import { getCountEndpointsConsumed } from '../../../services/costs-services'
import { useQuery } from 'react-query'

export default function useGridConsumer() {
  const router = useRouter()
  const [dateInitial, setDateInitial] = useState('')
  const [dateEnd, setDateEnd] = useState('')

  const dateInitialFormated = isValidDateFormatBrazilian(dateInitial)
    ? formatDateBrazilToAmerican(dateInitial)
    : undefined

  const dateEndFormated = isValidDateFormatBrazilian(dateEnd)
    ? formatDateBrazilToAmerican(dateEnd)
    : undefined
  const { data, isLoading } = useQuery<IResponseGetCountPerType>(
    ['getCountPerType', dateInitialFormated, dateEndFormated],
    () => getCountEndpointsConsumed(dateInitialFormated, dateEndFormated),
  )

  const ClearFilter = () => {
    setDateInitial('')
    setDateEnd('')
  }

  return {
    router,
    setDateInitial,
    setDateEnd,
    ClearFilter,
    dateInitial,
    dateEnd,
    data,
    isLoading,
  }
}
