import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: params.id})

  return (
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen></Stack.Screen>
    </SafeAreaView>
  )
}

export default JobDetails